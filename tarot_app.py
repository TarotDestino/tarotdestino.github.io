import sys
import os
import datetime
from PyQt5.QtWidgets import (
    QApplication, QWidget, QVBoxLayout, QHBoxLayout, QLabel, QLineEdit, 
    QComboBox, QTextEdit, QPushButton, QFileDialog, QMessageBox, QGroupBox, QScrollArea
)
from PyQt5.QtGui import QPixmap, QImage
from PyQt5.QtCore import Qt, QDate
from PIL import Image as PILImage # Alias to avoid conflict with PyQt5.QtGui.QImage
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Image as RLImage, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib import colors

class TarotAppPyQt(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Generador de Informes de Tarot con PyQt5")
        self.setGeometry(100, 100, 1200, 900) # Adjusted window size for PyQt

        self.image_folder = os.path.join(os.path.dirname(__file__), "images")
        self.cards_subfolder = os.path.join(self.image_folder, "cards")

        self.card_mapping = {
            "card_0.png": "El Loco", "card_1.png": "El Mago", "card_2.png": "La Sacerdotisa",
            "card_3.png": "La Emperatriz", "card_4.png": "El Emperador", "card_5.png": "El Papa",
            "card_6.png": "Los Amantes", "card_7.png": "El Carro", "card_8.png": "La Justicia",
            "card_9.png": "El Ermitaño", "card_10.png": "La Rueda de La Fortuna", "card_11.png": "La Fuerza",
            "card_12.png": "El Colgado", "card_13.png": "La Muerte", "card_14.png": "La Templanza",
            "card_15.png": "El Diablo", "card_16.png": "La Torre", "card_17.png": "La Estrella",
            "card_18.png": "La Luna", "card_19.png": "El Sol", "card_20.png": "El Juicio",
            "card_21.png": "El Mundo"
        }
        self.available_card_display_names = list(self.card_mapping.values())
        self.display_name_to_filename = {v: k for k, v in self.card_mapping.items()}

        self.selected_card_combos = [None] * 3
        self.card_image_labels = [None] * 3
        self.text_entries = [None] * 3

        self.init_ui()

    def init_ui(self):
        main_layout = QVBoxLayout(self)
        
        # Scroll Area for content that might exceed window height
        scroll_area = QScrollArea(self)
        scroll_area.setWidgetResizable(True)
        main_layout.addWidget(scroll_area)

        scroll_content_widget = QWidget()
        scroll_area.setWidget(scroll_content_widget)
        content_layout = QVBoxLayout(scroll_content_widget)

        # --- Inputs Name and Date ---
        input_layout = QHBoxLayout()
        content_layout.addLayout(input_layout)

        input_layout.addWidget(QLabel("Nombre:"))
        self.name_entry = QLineEdit(self)
        self.name_entry.setFixedWidth(250)
        input_layout.addWidget(self.name_entry)

        input_layout.addWidget(QLabel("Fecha:"))
        self.date_entry = QLineEdit(self)
        self.date_entry.setText(QDate.currentDate().toString("dd/MM/yyyy"))
        self.date_entry.setFixedWidth(150)
        input_layout.addWidget(self.date_entry)
        input_layout.addStretch(1)

        # --- Card Selection and Display Frame ---
        cards_layout = QHBoxLayout()
        content_layout.addLayout(cards_layout)

        positions = ["Pasado", "Presente", "Futuro"]
        for i in range(3):
            card_group_box = QGroupBox(positions[i], self)
            card_group_layout = QVBoxLayout(card_group_box)
            cards_layout.addWidget(card_group_box)

            card_group_layout.addWidget(QLabel("Seleccionar Carta:"))
            self.selected_card_combos[i] = QComboBox(self)
            self.selected_card_combos[i].addItems(self.available_card_display_names)
            self.selected_card_combos[i].currentIndexChanged.connect(lambda state, index=i: self.update_card_image(index))
            card_group_layout.addWidget(self.selected_card_combos[i])

            self.card_image_labels[i] = QLabel(self)
            self.card_image_labels[i].setFixedSize(200, 300) # Card image size
            self.card_image_labels[i].setAlignment(Qt.AlignCenter)
            self.card_image_labels[i].setStyleSheet("border: 1px solid black;") # Visual placeholder
            card_group_layout.addWidget(self.card_image_labels[i])
            self.update_card_image(i) # Initial image load

            card_group_layout.addWidget(QLabel("Interpretación:"))
            self.text_entries[i] = QTextEdit(self)
            self.text_entries[i].setFixedHeight(100)
            card_group_layout.addWidget(self.text_entries[i])
            card_group_layout.addStretch(1)

        # --- Export Button ---
        export_button = QPushButton("Exportar a PDF", self)
        export_button.clicked.connect(self.export_to_pdf)
        content_layout.addWidget(export_button, alignment=Qt.AlignCenter)
        
        content_layout.addStretch(1) # Pushes everything up if space allows
        self.setLayout(main_layout)

    def update_card_image(self, index):
        selected_display_name = self.selected_card_combos[index].currentText()
        card_filename = self.display_name_to_filename.get(selected_display_name)

        if not card_filename:
            self.card_image_labels[index].setText("Error: Nombre inválido")
            print(f"Error: No filename found for display name {selected_display_name}")
            return

        card_path = os.path.join(self.cards_subfolder, card_filename)

        if os.path.exists(card_path):
            try:
                # Using QPixmap for display in QLabel
                pixmap = QPixmap(card_path)
                self.card_image_labels[index].setPixmap(pixmap.scaled(
                    self.card_image_labels[index].width(), 
                    self.card_image_labels[index].height(), 
                    Qt.KeepAspectRatio, 
                    Qt.SmoothTransformation
                ))
            except Exception as e:
                self.card_image_labels[index].setText(f"Error al cargar imagen")
                print(f"Error loading image {card_path} for display: {e}")
        else:
            self.card_image_labels[index].setText("Imagen no encontrada")
            print(f"Card image not found: {card_path}")

    def export_to_pdf(self):
        name = self.name_entry.text()
        date = self.date_entry.text()

        card_filenames = []
        for i in range(3):
            display_name = self.selected_card_combos[i].currentText()
            filename = self.display_name_to_filename.get(display_name)
            if not filename:
                QMessageBox.critical(self, "Error", f"No se pudo encontrar el archivo para la carta: {display_name}")
                return
            card_filenames.append(filename)

        card_paths = [os.path.join(self.cards_subfolder, fname) for fname in card_filenames]
        texts = [self.text_entries[i].toPlainText().strip() for i in range(3)]

        if not all(os.path.exists(p) for p in card_paths):
            QMessageBox.critical(self, "Error", "Una o más imágenes de cartas seleccionadas no existen.")
            return

        filepath, _ = QFileDialog.getSaveFileName(
            self,
            "Guardar Informe PDF",
            os.path.expanduser("~"), # Default to home directory
            "PDF files (*.pdf)"
        )
        if not filepath:
            return

        try:
            doc = SimpleDocTemplate(filepath, pagesize=letter,
                                    rightMargin=0.5*inch, leftMargin=0.5*inch,
                                    topMargin=0.5*inch, bottomMargin=0.5*inch)
            styles = getSampleStyleSheet()
            story = []

            # 1. Header Image (portada.jpg)
            portada_image_path = os.path.join(self.image_folder, "portada.jpg")
            if os.path.exists(portada_image_path):
                try:
                    img_portada = PILImage.open(portada_image_path)
                    original_width, original_height = img_portada.size
                    available_width = doc.width
                    aspect_ratio = original_height / original_width
                    scaled_height = available_width * aspect_ratio
                    rl_portada_img = RLImage(portada_image_path, width=available_width, height=scaled_height)
                    story.append(rl_portada_img)
                    story.append(Spacer(1, 0.2*inch))
                except Exception as e:
                    print(f"Error loading portada.jpg for PDF: {e}")
                    story.append(Paragraph(f"Error al cargar imagen de portada: {e}", styles['Normal']))
            else:
                story.append(Paragraph("Imagen de portada (portada.jpg) no encontrada.", styles['Normal']))

            # --- Name and Date Fields ---
            header_data = [
                [Paragraph(f"<b>NOMBRE:</b> {name}", styles['Normal']), '', Paragraph(f"<b>FECHA:</b> {date}", styles['Normal'])]
            ]
            header_table = Table(header_data, colWidths=[2.5*inch, 2*inch, 2.5*inch])
            header_table.setStyle(TableStyle([
                ('ALIGN', (0,0), (0,0), 'LEFT'),
                ('ALIGN', (2,0), (2,0), 'RIGHT'),
                ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
                ('BOTTOMPADDING', (0,0), (-1,-1), 12),
            ]))
            story.append(header_table)
            story.append(Spacer(1, 0.2*inch))

            # Title: "My Tarot Reading - 3 CARD SPREAD"
            styles['h1'].alignment = 1 # Center
            styles['h2'].alignment = 1 # Center
            story.append(Paragraph("My Tarot Reading", styles['h1']))
            story.append(Paragraph("3 CARD SPREAD", styles['h2']))
            story.append(Spacer(1, 0.3*inch))

            # 2. Cards and Text
            positions = ["PASADO", "PRESENTE", "FUTURO"]
            table_content = []
            # Row 1: Position Labels
            table_content.append([Paragraph(f"<b>{positions[i]}</b>", styles['h3']) for i in range(3)])
            # Row 2: Card Images
            img_row_pdf = []
            for cp in card_paths:
                try:
                    img_pdf = RLImage(cp, width=1.8*inch, height=2.7*inch)
                    img_row_pdf.append(img_pdf)
                except Exception as e:
                    img_row_pdf.append(Paragraph(f"Error img: {e}", styles['Normal']))
            table_content.append(img_row_pdf)
            # Row 3: Text areas
            text_row_pdf = []
            for txt in texts:
                p_text = Paragraph(txt if txt else "-", styles['Normal'])
                text_row_pdf.append(p_text)
            table_content.append(text_row_pdf)

            col_width = (doc.width - 0.5*inch) / 3
            cards_table = Table(table_content, colWidths=[col_width]*3)
            cards_table.setStyle(TableStyle([
                ('ALIGN', (0,0), (-1,-1), 'CENTER'),
                ('VALIGN', (0,0), (-1,-1), 'TOP'),
                ('GRID', (0,0), (-1,-1), 0.25, colors.grey),
                ('BOTTOMPADDING', (0,0), (-1,-1), 12),
                ('TOPPADDING', (0,0), (-1,-1), 6),
            ]))
            story.append(cards_table)
            story.append(Spacer(1, 0.5*inch))

            # 3. Footer "DIVINE GUIDANCE"
            styles['Normal'].alignment = 1 # Center for footer
            story.append(Paragraph("DIVINE GUIDANCE", styles['Normal']))

            doc.build(story)
            QMessageBox.information(self, "Éxito", f"Informe PDF guardado en {filepath}")
        except Exception as e:
            QMessageBox.critical(self, "Error al exportar PDF", str(e))
            print(f"Error generating PDF: {e}")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    ex = TarotAppPyQt()
    ex.show()
    sys.exit(app.exec_())