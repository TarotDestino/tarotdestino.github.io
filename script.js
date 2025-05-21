// Array of 78 Marseille Tarot Cards with Brief Meanings
// Función para enviar el formulario de contacto
function sendContactForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  const subject = `Consulta de ${name}`;
  const body = `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`;
  
  window.location.href = `mailto:tarotdestinoangeles@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Event listener para el botón de enviar
const submitContactBtn = document.getElementById('submit-contact');
if(submitContactBtn) {
  submitContactBtn.addEventListener('click', sendContactForm);
} else {
  console.error('No se encontró el elemento submit-contact');
}

const tarotCards = [
    { name: "El Loco", meaning: "Nuevos comienzos, espontaneidad, pero cuidado con la impulsividad.", image: "images/cards/card_0.png" },
    { name: "El Mago", meaning: "Habilidad, creatividad y manifestación de tus deseos.", image: "images/cards/card_1.png" },
    { name: "La Sacerdotisa", meaning: "Intuición, sabiduría oculta y conexión espiritual.", image: "images/cards/card_2.png" },
    { name: "La Emperatriz", meaning: "Abundancia, fertilidad y conexión con la naturaleza.", image: "images/cards/card_3.png" },
    { name: "El Emperador", meaning: "Autoridad, estructura y control.", image: "images/cards/card_4.png" },
    { name: "El Sumo Sacerdote", meaning: "Tradición, guía espiritual y conformidad.", image: "images/cards/card_5.png" },
    { name: "Los Enamorados", meaning: "Amor, decisiones importantes y armonía.", image: "images/cards/card_6.png" },
    { name: "El Carro", meaning: "Determinación, victoria y dirección clara.", image: "images/cards/card_7.png" },
    { name: "La Justicia", meaning: "Equilibrio, verdad y consecuencias justas.", image: "images/cards/card_8.png" },
    { name: "El Ermitaño", meaning: "Introspección, búsqueda de la verdad interior.", image: "images/cards/card_9.png" },
    { name: "La Rueda de la Fortuna", meaning: "Cambio, ciclos y destino.", image: "images/cards/card_10.png" },
    { name: "La Fuerza", meaning: "Coraje, autocontrol y fuerza interior.", image: "images/cards/card_11.png" },
    { name: "El Colgado", meaning: "Sacrificio, pausa y nueva perspectiva.", image: "images/cards/card_12.png" },
    { name: "La Muerte", meaning: "Transformación, finales y nuevos comienzos.", image: "images/cards/card_13.png" },
    { name: "La Templanza", meaning: "Equilibrio, moderación y armonía.", image: "images/cards/card_14.png" },
    { name: "El Diablo", meaning: "Tentación, ataduras y materialismo.", image: "images/cards/card_15.png" },
    { name: "La Torre", meaning: "Cambio repentino, destrucción y revelación.", image: "images/cards/card_16.png" },
    { name: "La Estrella", meaning: "Esperanza, inspiración y renovación.", image: "images/cards/card_17.png" },
    { name: "La Luna", meaning: "Ilusión, intuición y subconsciente.", image: "images/cards/card_18.png" },
    { name: "El Sol", meaning: "Éxito, vitalidad y claridad.", image: "images/cards/card_19.png" },
    { name: "El Juicio", meaning: "Renacimiento, evaluación y despertar.", image: "images/cards/card_20.png" },
    { name: "El Mundo", meaning: "Culminación, éxito y unidad.", image: "images/cards/card_21.png" },
    { name: "As de Bastos", meaning: "Inspiración, nuevos proyectos y energía creativa.", image: "images/cards/card_22.png" },
    { name: "Dos de Bastos", meaning: "Planificación, decisiones y expansión.", image: "images/cards/card_23.png" },
    { name: "Tres de Bastos", meaning: "Progreso, visión a largo plazo y oportunidades.", image: "images/cards/card_24.png" },
    { name: "Cuatro de Bastos", meaning: "Celebración, estabilidad y comunidad.", image: "images/cards/card_25.png" },
    { name: "Cinco de Bastos", meaning: "Competencia, conflicto y desafíos.", image: "images/cards/card_26.png" },
    { name: "Seis de Bastos", meaning: "Victoria, reconocimiento y éxito público.", image: "images/cards/card_27.png" },
    { name: "Siete de Bastos", meaning: "Defensa, perseverancia y resistencia.", image: "images/cards/card_28.png" },
    { name: "Ocho de Bastos", meaning: "Movimiento rápido, progreso y acción.", image: "images/cards/card_29.png" },
    { name: "Nueve de Bastos", meaning: "Resiliencia, determinación y protección.", image: "images/cards/card_30.png" },
    { name: "Diez de Bastos", meaning: "Carga, responsabilidad y trabajo duro.", image: "images/cards/card_31.png" },
    { name: "Sota de Bastos", meaning: "Entusiasmo, exploración y mensajes.", image: "images/cards/card_32.png" },
    { name: "Caballero de Bastos", meaning: "Aventura, pasión y acción impulsiva.", image: "images/cards/card_33.png" },
    { name: "Reina de Bastos", meaning: "Confianza, liderazgo y creatividad.", image: "images/cards/card_34.png" },
    { name: "Rey de Bastos", meaning: "Visión, liderazgo y emprendimiento.", image: "images/cards/card_35.png" },
    { name: "As de Copas", meaning: "Amor, emociones profundas y nuevos sentimientos.", image: "images/cards/card_36.png" },
    { name: "Dos de Copas", meaning: "Unión, amor mutuo y conexión emocional.", image: "images/cards/card_37.png" },
    { name: "Tres de Copas", meaning: "Amistad, celebración y alegría.", image: "images/cards/card_38.png" },
    { name: "Cuatro de Copas", meaning: "Apathía, reevaluación y desconexión.", image: "images/cards/card_39.png" },
    { name: "Cinco de Copas", meaning: "Pérdida, arrepentimiento y tristeza.", image: "images/cards/card_40.png" },
    { name: "Seis de Copas", meaning: "Nostalgia, recuerdos y reencuentros.", image: "images/cards/card_41.png" },
    { name: "Siete de Copas", meaning: "Ilusiones, opciones y sueños.", image: "images/cards/card_42.png" },
    { name: "Ocho de Copas", meaning: "Abandono, búsqueda y transición.", image: "images/cards/card_43.png" },
    { name: "Nueve de Copas", meaning: "Satisfacción, deseos cumplidos y felicidad.", image: "images/cards/card_44.png" },
    { name: "Diez de Copas", meaning: "Armonía, familia y felicidad duradera.", image: "images/cards/card_45.png" },
    { name: "Sota de Copas", meaning: "Sensibilidad, mensajes emocionales y creatividad.", image: "images/cards/card_46.png" },
    { name: "Caballero de Copas", meaning: "Romanticismo, idealismo y encanto.", image: "images/cards/card_47.png" },
    { name: "Reina de Copas", meaning: "Empatía, intuición y cuidado emocional.", image: "images/cards/card_48.png" },
    { name: "Rey de Copas", meaning: "Control emocional, compasión y madurez.", image: "images/cards/card_49.png" },
    { name: "As de Espadas", meaning: "Claridad, verdad y nuevos pensamientos.", image: "images/cards/card_50.png" },
    { name: "Dos de Espadas", meaning: "Indecisión, estancamiento y equilibrio tenso.", image: "images/cards/card_51.png" },
    { name: "Tres de Espadas", meaning: "Dolor, traición y corazón roto.", image: "images/cards/card_52.png" },
    { name: "Cuatro de Espadas", meaning: "Descanso, recuperación y reflexión.", image: "images/cards/card_53.png" },
    { name: "Cinco de Espadas", meaning: "Conflicto, derrota y egoísmo.", image: "images/cards/card_54.png" },
    { name: "Seis de Espadas", meaning: "Transición, viaje y sanación.", image: "images/cards/card_55.png" },
    { name: "Siete de Espadas", meaning: "Engaño, estrategia y astucia.", image: "images/cards/card_56.png" },
    { name: "Ocho de Espadas", meaning: "Restricción, confusión y limitaciones.", image: "images/cards/card_57.png" },
    { name: "Nueve de Espadas", meaning: "Ansiedad, pesadillas y preocupación.", image: "images/cards/card_58.png" },
    { name: "Diez de Espadas", meaning: "Traición, final doloroso y colapso.", image: "images/cards/card_59.png" },
    { name: "Sota de Espadas", meaning: "Curiosidad, vigilancia y nuevas ideas.", image: "images/cards/card_60.png" },
    { name: "Caballero de Espadas", meaning: "Ambición, acción rápida y determinación.", image: "images/cards/card_61.png" },
    { name: "Reina de Espadas", meaning: "Claridad, independencia y honestidad.", image: "images/cards/card_62.png" },
    { name: "Rey de Espadas", meaning: "Autoridad intelectual, verdad y lógica.", image: "images/cards/card_63.png" },
    { name: "As de Oros", meaning: "Prosperidad, nuevos comienzos financieros.", image: "images/cards/card_64.png" },
    { name: "Dos de Oros", meaning: "Equilibrio, adaptabilidad y multitarea.", image: "images/cards/card_65.png" },
    { name: "Tres de Oros", meaning: "Colaboración, trabajo en equipo y maestría.", image: "images/cards/card_66.png" },
    { name: "Cuatro de Oros", meaning: "Seguridad, control y avaricia.", image: "images/cards/card_67.png" },
    { name: "Cinco de Oros", meaning: "Pérdida, inseguridad y dificultades.", image: "images/cards/card_68.png" },
    { name: "Seis de Oros", meaning: "Generosidad, caridad y equilibrio.", image: "images/cards/card_69.png" },
    { name: "Siete de Oros", meaning: "Paciencia, esfuerzo y crecimiento lento.", image: "images/cards/card_70.png" },
    { name: "Ocho de Oros", meaning: "Dedicación, aprendizaje y trabajo duro.", image: "images/cards/card_71.png" },
    { name: "Nueve de Oros", meaning: "Independencia, lujo y autosuficiencia.", image: "images/cards/card_72.png" },
    { name: "Diez de Oros", meaning: "Riqueza, legado y estabilidad familiar.", image: "images/cards/card_73.png" },
    { name: "Sota de Oros", meaning: "Oportunidades, aprendizaje y ambición.", image: "images/cards/card_74.png" },
    { name: "Caballero de Oros", meaning: "Responsabilidad, trabajo duro y fiabilidad.", image: "images/cards/card_75.png" },
    { name: "Reina de Oros", meaning: "Nutrición, seguridad y practicidad.", image: "images/cards/card_76.png" },
    { name: "Rey de Oros", meaning: "Éxito, riqueza y liderazgo práctico.", image: "images/cards/card_77.png" }
];

// Array of 24 Elder Futhark Runes with Symbols, Meanings, and Predictions in Spanish
const runes = [
    { name: "Fehu", symbol: "ᚠ", meaning: "Riqueza, prosperidad, éxito material.", prediction: "Espera crecimiento financiero, pero gestiona tus recursos con cuidado.", image: "images/runes/rune_0.png" },
    { name: "Uruz", symbol: "ᚢ", meaning: "Fuerza, salud, energía vital.", prediction: "Tu resistencia te llevará a superar desafíos.", image: "images/runes/rune_1.png" },
    { name: "Thurisaz", symbol: "ᚦ", meaning: "Protección, conflicto, poder.", prediction: "Mantente firme; un desafío pondrá a prueba tus límites.", image: "images/runes/rune_2.png" },
    { name: "Ansuz", symbol: "ᚨ", meaning: "Comunicación, sabiduría, inspiración.", prediction: "Escucha tu sabiduría interior para obtener claridad.", image: "images/runes/rune_3.png" },
    { name: "Raidho", symbol: "ᚱ", meaning: "Viaje, movimiento, dirección.", prediction: "Un viaje, físico o espiritual, está por comenzar.", image: "images/runes/rune_4.png" },
    { name: "Kenaz", symbol: "ᚲ", meaning: "Creatividad, iluminación, transformación.", prediction: "Tu chispa creativa iluminará el camino a seguir.", image: "images/runes/rune_5.png" },
    { name: "Gebo", symbol: "ᚷ", meaning: "Asociación, generosidad, equilibrio.", prediction: "Una alianza traerá beneficios mutuos.", image: "images/runes/rune_6.png" },
    { name: "Wunjo", symbol: "ᚹ", meaning: "Alegría, armonía, satisfacción.", prediction: "La felicidad y la paz están a tu alcance.", image: "images/runes/rune_7.png" },
    { name: "Hagalaz", symbol: "ᚺ", meaning: "Cambio, disrupción, liberación.", prediction: "Acepta un cambio inesperado para crecer.", image: "images/runes/rune_8.png" },
    { name: "Nauthiz", symbol: "ᚾ", meaning: "Necesidad, resistencia, superación.", prediction: "Enfrenta los retos con determinación para triunfar.", image: "images/runes/rune_9.png" },
    { name: "Isa", symbol: "ᛁ", meaning: "Pausa, introspección, estancamiento.", prediction: "Tómate un tiempo para reflexionar antes de actuar.", image: "images/runes/rune_10.png" },
    { name: "Jera", symbol: "ᛃ", meaning: "Cosecha, ciclos, recompensa.", prediction: "La paciencia dará frutos valiosos.", image: "images/runes/rune_11.png" },
    { name: "Eihwaz", symbol: "ᛇ", meaning: "Estabilidad, conexión espiritual, resistencia.", prediction: "Confía en tu fuerza interior para perseverar.", image: "images/runes/rune_12.png" },
    { name: "Perthro", symbol: "ᛈ", meaning: "Destino, misterio, cambio oculto.", prediction: "Abraza lo desconocido; el destino está en juego.", image: "images/runes/rune_13.png" },
    { name: "Algiz", symbol: "ᛉ", meaning: "Protección, guía, conexión divina.", prediction: "Estás protegido; confía en tus instintos.", image: "images/runes/rune_14.png" },
    { name: "Sowilo", symbol: "ᛋ", meaning: "Éxito, vitalidad, claridad.", prediction: "La victoria y la claridad iluminarán tu camino.", image: "images/runes/rune_15.png" },
    { name: "Tiwaz", symbol: "ᛏ", meaning: "Justicia, liderazgo, sacrificio.", prediction: "Actúa con honor para alcanzar tus metas.", image: "images/runes/rune_16.png" },
    { name: "Berkano", symbol: "ᛒ", meaning: "Crecimiento, fertilidad, renacimiento.", prediction: "Pronto florecerán nuevos comienzos.", image: "images/runes/rune_17.png" },
    { name: "Ehwaz", symbol: "ᛖ", meaning: "Colaboración, movimiento, confianza.", prediction: "El trabajo en equipo te impulsará hacia adelante.", image: "images/runes/rune_18.png" },
    { name: "Mannaz", symbol: "ᛗ", meaning: "Humanidad, comunidad, autoconocimiento.", prediction: "Busca el equilibrio contigo mismo y con otros.", image: "images/runes/rune_19.png" },
    { name: "Laguz", symbol: "ᛚ", meaning: "Intuición, emociones, fluidez.", prediction: "Confía en tus instintos para superar desafíos.", image: "images/runes/rune_20.png" },
    { name: "Ingwaz", symbol: "ᛝ", meaning: "Fertilidad, potencial, finalización.", prediction: "Tus esfuerzos pronto darán resultados.", image: "images/runes/rune_21.png" },
    { name: "Dagaz", symbol: "ᛞ", meaning: "Transformación, esperanza, claridad.", prediction: "Un avance traerá nueva luz a tu vida.", image: "images/runes/rune_22.png" },
    { name: "Othala", symbol: "ᛟ", meaning: "Hogar, herencia, legado.", prediction: "Concéntrate en la familia y tus raíces para encontrar estabilidad.", image: "images/runes/rune_23.png" }
];

// Hamburger Menu Toggle
function initNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// Tarot Card Logic (Slot Machine Style with 5 Cards and Modal)
function initTarot() {
    const slots = [
        document.getElementById('slot-1'),
        document.getElementById('slot-2'),
        document.getElementById('slot-3'),
        document.getElementById('slot-4'),
        document.getElementById('slot-5')
    ];
    const spinButton = document.getElementById('spin-button');
    const tarotModal = document.getElementById('tarot-modal');
    const tarotResult = document.getElementById('tarot-result');
    const modalClose = document.querySelector('.modal-close');
    let isSpinning = false;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function spinSlot(slot, duration, finalCard) {
        let startTime = null;
        const spinInterval = 100;
        const shuffledCards = shuffle([...tarotCards]);

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            if (elapsed < duration) {
                const randomCard = shuffledCards[Math.floor(Math.random() * shuffledCards.length)];
                slot.style.backgroundImage = `url('${randomCard.image}')`;
                slot.classList.add('spinning');
                requestAnimationFrame(animate);
            } else {
                slot.style.backgroundImage = `url('${finalCard.image}')`;
                slot.classList.remove('spinning');
            }
        }

        requestAnimationFrame(animate);
    }

    function displayTarotResults(cards) {
        tarotResult.innerHTML = '';
        cards.forEach((card, index) => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'modal-card';
            resultDiv.innerHTML = `
                <img src="${card.image}" alt="${card.name}">
                <div class="modal-card-text">
                    <h3>Carta ${index + 1}: ${card.name}</h3>
                    <p>${card.meaning}</p>
                </div>
            `;
            tarotResult.appendChild(resultDiv);
        });
        tarotModal.style.display = 'flex';
    }

    if (spinButton) {
        spinButton.addEventListener('click', () => {
            if (isSpinning) return;
            isSpinning = true;
            spinButton.disabled = true;
            tarotResult.innerHTML = '';

            const selectedCards = shuffle([...tarotCards]).slice(0, 5);

            spinSlot(slots[0], 1000, selectedCards[0]);
            spinSlot(slots[1], 1200, selectedCards[1]);
            spinSlot(slots[2], 1400, selectedCards[2]);
            spinSlot(slots[3], 1600, selectedCards[3]);
            spinSlot(slots[4], 1800, selectedCards[4]);

            setTimeout(() => {
                displayTarotResults(selectedCards);
                isSpinning = false;
                spinButton.disabled = false;
            }, 1800);
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            tarotModal.style.display = 'none';
        });
    }
}

// Rune Logic
function initRunes() {
    const runeContainer = document.getElementById('rune-cards');
    const runeResult = document.getElementById('rune-result');
    const resetButton = document.getElementById('reset-runes');
    let selectedRunes = [];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function displayRunes() {
        runeContainer.innerHTML = '';
        selectedRunes = [];
        runeResult.innerHTML = '';
        const shuffledRunes = shuffle([...runes]).slice(0, 10);
        shuffledRunes.forEach((rune, index) => {
            const runeElement = document.createElement('div');
            runeElement.classList.add('rune-card');
            runeElement.style.setProperty('--index', index);
            runeElement.innerHTML = `
                <div class="rune-card-inner">
                    <div class="card-front"></div>
                    <div class="card-back" style="background-image: url('${rune.image}')"></div>
                </div>
            `;
            runeElement.addEventListener('click', () => {
                if (!runeElement.classList.contains('flipped') && selectedRunes.length < 3) {
                    runeElement.classList.add('flipped');
                    selectedRunes.push(rune);
                    if (selectedRunes.length === 3) {
                        displayRuneResults();
                        runeContainer.querySelectorAll('.rune-card:not(.flipped)').forEach(c => c.style.opacity = '0.3');
                    }
                }
            });
            runeContainer.appendChild(runeElement);
        });
    }

    function displayRuneResults() {
        runeResult.innerHTML = '';
        selectedRunes.forEach((rune, index) => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'modal-card';
            resultDiv.innerHTML = `
                <img src="${rune.image}" alt="${rune.name}">
                <div class="modal-card-text">
                    <h3>Runa ${index + 1}: ${rune.name} (${rune.symbol})</h3>
                    <p><strong>Significado:</strong> ${rune.meaning}</p>
                    <p><strong>Predicción:</strong> ${rune.prediction}</p>
                </div>
            `;
            runeResult.appendChild(resultDiv);
        });
    }

    if (runeContainer) {
        displayRunes();
    }

    if (resetButton) {
        resetButton.addEventListener('click', displayRunes);
    }
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submitContact = document.getElementById('submit-contact');
    if (submitContact) {
        submitContact.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if (name && email && message) {
                alert('¡Mensaje enviado! Pronto te responderemos.');
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }
}

// Newsletter Form Handling
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    const submitNewsletter = document.getElementById('submit-newsletter');
    if (submitNewsletter) {
        submitNewsletter.addEventListener('click', () => {
            const email = document.getElementById('newsletter-email').value;
            if (email) {
                alert('¡Suscrito! Recibirás nuestras actualizaciones.');
                newsletterForm.reset();
            } else {
                alert('Por favor, ingresa un email válido.');
            }
        });
    }
}

// Chat Functionality
function initChat() {
    const chatBox = document.getElementById('chat-box');
    const toggleChat = document.getElementById('toggle-chat');
    const sendChat = document.getElementById('send-chat');
    const chatMessage = document.getElementById('chat-message');

    if (toggleChat) {
        toggleChat.addEventListener('click', () => {
            chatBox.classList.toggle('active');
            toggleChat.textContent = chatBox.classList.contains('active') ? 'Cerrar Chat' : 'Abrir Chat';
        });
    }

    if (sendChat) {
        sendChat.addEventListener('click', () => {
            const message = chatMessage.value.trim();
            if (message) {
                alert('Mensaje enviado al equipo de soporte: ' + message);
                chatMessage.value = '';
            } else {
                alert('Por favor, escribe un mensaje.');
            }
        });
    }
}

// Section Animations
function initAnimations() {
    const sections = document.querySelectorAll('.animate-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
}

// Initialize All
document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initTarot();
    initRunes();
    initContactForm();
    initNewsletterForm();
    initChat();
    initAnimations();
});