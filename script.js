// Array completo de 78 cartas del Tarot Marsella
const tarotCards = [
    // === Arcanos Mayores (22 cartas) ===
    { name: "0. El Loco", meaning: "Libertad, espontaneidad, locura creativa. Nuevos comienzos.", arcana: "major" },
    { name: "I. El Mago", meaning: "Habilidad, destreza, concentración. El poder de la voluntad.", arcana: "major" },
    { name: "II. La Sacerdotisa", meaning: "Intuición, misterio, sabiduría oculta. Paciencia.", arcana: "major" },
    { name: "III. La Emperatriz", meaning: "Fertilidad, naturaleza, abundancia. Amor maternal.", arcana: "major" },
    { name: "IV. El Emperador", meaning: "Autoridad, estructura, poder establecido. Protección.", arcana: "major" },
    { name: "V. El Hierofante", meaning: "Tradición, espiritualidad, enseñanza. Búsqueda de sentido.", arcana: "major" },
    { name: "VI. Los Enamorados", meaning: "Amor, unión, elecciones. Relaciones importantes.", arcana: "major" },
    { name: "VII. El Carro", meaning: "Victoria, autocontrol, progreso. Fuerza de voluntad.", arcana: "major" },
    { name: "VIII. La Justicia", meaning: "Equilibrio, justicia, causa y efecto. Decisiones kármicas.", arcana: "major" },
    { name: "IX. El Ermitaño", meaning: "Introspección, soledad, búsqueda interior. Guía espiritual.", arcana: "major" },
    { name: "X. La Rueda de la Fortuna", meaning: "Ciclos, destino, cambios inevitables. Suerte.", arcana: "major" },
    { name: "XI. La Fuerza", meaning: "Fortaleza interior, paciencia, compasión. Dominio emocional.", arcana: "major" },
    { name: "XII. El Colgado", meaning: "Sacrificio, nueva perspectiva. Espera y reflexión.", arcana: "major" },
    { name: "XIII. La Muerte", meaning: "Transformación, finales necesarios. Renacimiento.", arcana: "major" },
    { name: "XIV. La Templanza", meaning: "Equilibrio, moderación, curación. Paciencia.", arcana: "major" },
    { name: "XV. El Diablo", meaning: "Ataduras, materialismo, sombras. Tentaciones.", arcana: "major" },
    { name: "XVI. La Torre", meaning: "Caída repentina, revelación. Cambio drástico.", arcana: "major" },
    { name: "XVII. La Estrella", meaning: "Esperanza, fe, inspiración. Sanación emocional.", arcana: "major" },
    { name: "XVIII. La Luna", meaning: "Ilusión, intuición, inconsciente. Confusión temporal.", arcana: "major" },
    { name: "XIX. El Sol", meaning: "Alegría, éxito, vitalidad. Claridad y verdad.", arcana: "major" },
    { name: "XX. El Juicio", meaning: "Renacimiento, llamado interior. Absolución.", arcana: "major" },
    { name: "XXI. El Mundo", meaning: "Completitud, logro, viaje. Ciclo cerrado.", arcana: "major" },

    // === Arcanos Menores (56 cartas) ===
    // Bastos (Fuego: Energía, creatividad)
    { name: "As de Bastos", meaning: "Nuevos proyectos, energía creativa. Entusiasmo.", arcana: "minor", suit: "bastos" },
    { name: "Dos de Bastos", meaning: "Planificación, decisiones. Oportunidades.", arcana: "minor", suit: "bastos" },
    { name: "Tres de Bastos", meaning: "Colaboración, visión a largo plazo.", arcana: "minor", suit: "bastos" },
    { name: "Cuatro de Bastos", meaning: "Celebración, armonía, recompensa.", arcana: "minor", suit: "bastos" },
    { name: "Cinco de Bastos", meaning: "Conflicto, competencia, desafíos.", arcana: "minor", suit: "bastos" },
    { name: "Seis de Bastos", meaning: "Victoria, reconocimiento, éxito.", arcana: "minor", suit: "bastos" },
    { name: "Siete de Bastos", meaning: "Defensa, perseverancia, resistencia.", arcana: "minor", suit: "bastos" },
    { name: "Ocho de Bastos", meaning: "Movimiento rápido, noticias, progreso.", arcana: "minor", suit: "bastos" },
    { name: "Nueve de Bastos", meaning: "Resiliencia, fuerza ante la adversidad.", arcana: "minor", suit: "bastos" },
    { name: "Diez de Bastos", meaning: "Carga, responsabilidades, agotamiento.", arcana: "minor", suit: "bastos" },
    { name: "Paje de Bastos", meaning: "Mensajero, noticias, creatividad.", arcana: "minor", suit: "bastos" },
    { name: "Caballero de Bastos", meaning: "Acción, pasión, impulso.", arcana: "minor", suit: "bastos" },
    { name: "Reina de Bastos", meaning: "Confianza, independencia, carisma.", arcana: "minor", suit: "bastos" },
    { name: "Rey de Bastos", meaning: "Liderazgo, visión, determinación.", arcana: "minor", suit: "bastos" },

    // Copas (Agua: Emociones, amor)
    { name: "As de Copas", meaning: "Amor nuevo, alegría emocional. Bendiciones.", arcana: "minor", suit: "copas" },
    { name: "Dos de Copas", meaning: "Conexión emocional, amor. Armonía.", arcana: "minor", suit: "copas" },
    { name: "Tres de Copas", meaning: "Celebración, amistad, comunidad.", arcana: "minor", suit: "copas" },
    { name: "Cuatro de Copas", meaning: "Apatía, reflexión, oportunidades perdidas.", arcana: "minor", suit: "copas" },
    { name: "Cinco de Copas", meaning: "Pérdida, arrepentimiento, duelo.", arcana: "minor", suit: "copas" },
    { name: "Seis de Copas", meaning: "Nostalgia, recuerdos, inocencia.", arcana: "minor", suit: "copas" },
    { name: "Siete de Copas", meaning: "Ilusiones, opciones, fantasía.", arcana: "minor", suit: "copas" },
    { name: "Ocho de Copas", meaning: "Abandono, búsqueda interior.", arcana: "minor", suit: "copas" },
    { name: "Nueve de Copas", meaning: "Satisfacción, deseos cumplidos.", arcana: "minor", suit: "copas" },
    { name: "Diez de Copas", meaning: "Felicidad familiar, plenitud emocional.", arcana: "minor", suit: "copas" },
    { name: "Paje de Copas", meaning: "Sensibilidad, creatividad emocional.", arcana: "minor", suit: "copas" },
    { name: "Caballero de Copas", meaning: "Romance, idealismo, emociones.", arcana: "minor", suit: "copas" },
    { name: "Reina de Copas", meaning: "Empatía, intuición, cuidado.", arcana: "minor", suit: "copas" },
    { name: "Rey de Copas", meaning: "Sabiduría emocional, compasión.", arcana: "minor", suit: "copas" },

    // Espadas (Aire: Mente, conflicto)
    { name: "As de Espadas", meaning: "Claridad mental, verdad. Victoria intelectual.", arcana: "minor", suit: "espadas" },
    { name: "Dos de Espadas", meaning: "Decisión difícil, equilibrio. Evasión.", arcana: "minor", suit: "espadas" },
    { name: "Tres de Espadas", meaning: "Dolor emocional, traición, corazón roto.", arcana: "minor", suit: "espadas" },
    { name: "Cuatro de Espadas", meaning: "Descanso, recuperación, retiro.", arcana: "minor", suit: "espadas" },
    { name: "Cinco de Espadas", meaning: "Conflictos, victoria pírrica.", arcana: "minor", suit: "espadas" },
    { name: "Seis de Espadas", meaning: "Transición, cambio, movimiento.", arcana: "minor", suit: "espadas" },
    { name: "Siete de Espadas", meaning: "Engaño, estrategia, secretos.", arcana: "minor", suit: "espadas" },
    { name: "Ocho de Espadas", meaning: "Restricción, impotencia, miedo.", arcana: "minor", suit: "espadas" },
    { name: "Nueve de Espadas", meaning: "Ansiedad, pesadillas, culpa.", arcana: "minor", suit: "espadas" },
    { name: "Diez de Espadas", meaning: "Final doloroso, traición, crisis.", arcana: "minor", suit: "espadas" },
    { name: "Paje de Espadas", meaning: "Curiosidad, ideas nuevas, comunicación.", arcana: "minor", suit: "espadas" },
    { name: "Caballero de Espadas", meaning: "Acción rápida, determinación, conflicto.", arcana: "minor", suit: "espadas" },
    { name: "Reina de Espadas", meaning: "Independencia, inteligencia, objetividad.", arcana: "minor", suit: "espadas" },
    { name: "Rey de Espadas", meaning: "Autoridad intelectual, justicia, razón.", arcana: "minor", suit: "espadas" },

    // Oros (Tierra: Dinero, trabajo)
    { name: "As de Oros", meaning: "Abundancia material, nueva oportunidad económica.", arcana: "minor", suit: "oros" },
    { name: "Dos de Oros", meaning: "Equilibrio financiero, malabarismos. Adaptación.", arcana: "minor", suit: "oros" },
    { name: "Tres de Oros", meaning: "Trabajo en equipo, maestría, colaboración.", arcana: "minor", suit: "oros" },
    { name: "Cuatro de Oros", meaning: "Estabilidad, conservación, control.", arcana: "minor", suit: "oros" },
    { name: "Cinco de Oros", meaning: "Pérdida material, dificultades económicas.", arcana: "minor", suit: "oros" },
    { name: "Seis de Oros", meaning: "Generosidad, ayuda mutua, compartir.", arcana: "minor", suit: "oros" },
    { name: "Siete de Oros", meaning: "Inversión a largo plazo, paciencia.", arcana: "minor", suit: "oros" },
    { name: "Ocho de Oros", meaning: "Artesanía, dedicación, aprendizaje.", arcana: "minor", suit: "oros" },
    { name: "Nueve de Oros", meaning: "Autosuficiencia, lujo, disfrute.", arcana: "minor", suit: "oros" },
    { name: "Diez de Oros", meaning: "Legado, riqueza familiar, seguridad.", arcana: "minor", suit: "oros" },
    { name: "Paje de Oros", meaning: "Oportunidad material, noticias financieras.", arcana: "minor", suit: "oros" },
    { name: "Caballero de Oros", meaning: "Responsabilidad, método, avance lento.", arcana: "minor", suit: "oros" },
    { name: "Reina de Oros", meaning: "Práctica, generosidad, abundancia.", arcana: "minor", suit: "oros" },
    { name: "Rey de Oros", meaning: "Seguridad financiera, liderazgo práctico.", arcana: "minor", suit: "oros" }
];

// Tirada de Tarot
document.getElementById('draw-cards').addEventListener('click', function() {
    const cardSlots = document.getElementById('card-slots');
    const readingText = document.getElementById('reading-text');
    
    // Limpiar tirada anterior
    cardSlots.innerHTML = '';
    readingText.innerHTML = '<p>Cargando tu destino...</p>';
    
    // Seleccionar 3 cartas al azar
    const selectedCards = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        selectedCards.push(tarotCards[randomIndex]);
        
        // Crear elemento de carta
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `<span>${tarotCards[randomIndex].name}</span>`;
        cardSlots.appendChild(cardElement);
        
        // Animación de volteo
        setTimeout(() => {
            cardElement.style.transform = 'rotateY(180deg)';
        }, i * 300);
    }
    
    // Mostrar interpretación después de 1.5 segundos
    setTimeout(() => {
        let reading = `
            <p><strong>Pasado:</strong> ${selectedCards[0].meaning}</p>
            <p><strong>Presente:</strong> ${selectedCards[1].meaning}</p>
            <p><strong>Futuro:</strong> ${selectedCards[2].meaning}</p>
            <button id="upgrade-reading" class="btn upgrade-btn">Consulta Detallada (19.99€)</button>
        `;
        readingText.innerHTML = reading;
        
        // Configurar botón de mejora
        document.getElementById('upgrade-reading').addEventListener('click', showPaymentModal);
    }, 1500);
});

// Modal de Pago
function showPaymentModal() {
    document.getElementById('payment-modal').style.display = "block";
}

function closeModal() {
    document.getElementById('payment-modal').style.display = "none";
}

// Cerrar modal al hacer clic en X o fuera
document.querySelector('.close').addEventListener('click', closeModal);
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('payment-modal')) {
        closeModal();
    }
});

// PayPal Integration
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '19.99'
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago completado por ' + details.payer.name.given_name + '! ID: ' + data.orderID);
            closeModal();
        });
    },
    onError: function(err) {
        alert('Error en el pago: ' + err);
    }
}).render('#paypal-button-container');

// Formulario de Contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Consulta enviada. Te responderé en 24 horas.');
    this.reset();
});