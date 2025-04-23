// Array of 78 Marseille Tarot Cards with Brief Meanings
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

// Array of 24 Elder Futhark Runes with Symbols, Meanings, and Predictions
const runes = [
    { name: "Fehu", symbol: "ᚠ", meaning: "Riqueza, prosperidad, éxito material.", prediction: "Expect financial growth but manage resources wisely.", image: "images/runes/rune_0.png" },
    { name: "Uruz", symbol: "ᚢ", meaning: "Fuerza, salud, energía vital.", prediction: "Your resilience will lead to overcoming challenges.", image: "images/runes/rune_1.png" },
    { name: "Thurisaz", symbol: "ᚦ", meaning: "Protección, conflicto, poder.", prediction: "Stand firm; a challenge may test your boundaries.", image: "images/runes/rune_2.png" },
    { name: "Ansuz", symbol: "ᚨ", meaning: "Comunicación, sabiduría, inspiración.", prediction: "Listen to inner wisdom for clear guidance.", image: "images/runes/rune_3.png" },
    { name: "Raidho", symbol: "ᚱ", meaning: "Viaje, movimiento, dirección.", prediction: "A journey, physical or spiritual, awaits you.", image: "images/runes/rune_4.png" },
    { name: "Kenaz", symbol: "ᚲ", meaning: "Creativity, iluminación, transformación.", prediction: "Your creative spark will light the way forward.", image: "images/runes/rune_5.png" },
    { name: "Gebo", symbol: "ᚷ", meaning: "Asociación, generosidad, equilibrio.", prediction: "A partnership will bring mutual benefits.", image: "images/runes/rune_6.png" },
    { name: "Wunjo", symbol: "ᚹ", meaning: "Alegría, armonía, satisfacción.", prediction: "Happiness and peace are within reach.", image: "images/runes/rune_7.png" },
    { name: "Hagalaz", symbol: "ᚺ", meaning: "Cambio, disrupción, liberación.", prediction: "Embrace unexpected change for growth.", image: "images/runes/rune_8.png" },
    { name: "Nauthiz", symbol: "ᚾ", meaning: "Necesidad, resistencia, superación.", prediction: "Face challenges with determination to succeed.", image: "images/runes/rune_9.png" },
    { name: "Isa", symbol: "ᛁ", meaning: "Pausa, introspección, estancamiento.", prediction: "Take time to reflect before acting.", image: "images/runes/rune_10.png" },
    { name: "Jera", symbol: "ᛃ", meaning: "Cosecha, ciclos, recompensa.", prediction: "Patience will yield fruitful results.", image: "images/runes/rune_11.png" },
    { name: "Eihwaz", symbol: "ᛇ", meaning: "Estabilidad, conexión espiritual, resistencia.", prediction: "Trust your inner strength to endure.", image: "images/runes/rune_12.png" },
    { name: "Perthro", symbol: "ᛈ", meaning: "Destino, misterio, cambio oculto.", prediction: "Embrace the unknown; fate is at work.", image: "images/runes/rune_13.png" },
    { name: "Algiz", symbol: "ᛉ", meaning: "Protección, guía, conexión divina.", prediction: "You are shielded; trust your instincts.", image: "images/runes/rune_14.png" },
    { name: "Sowilo", symbol: "ᛋ", meaning: "Éxito, vitalidad, claridad.", prediction: "Victory and clarity will light your path.", image: "images/runes/rune_15.png" },
    { name: "Tiwaz", symbol: "ᛏ", meaning: "Justicia, liderazgo, sacrificio.", prediction: "Act with honor to achieve your goals.", image: "images/runes/rune_16.png" },
    { name: "Berkano", symbol: "ᛒ", meaning: "Crecimiento, fertilidad, renacimiento.", prediction: "New beginnings will blossom soon.", image: "images/runes/rune_17.png" },
    { name: "Ehwaz", symbol: "ᛖ", meaning: "Colaboración, movimiento, confianza.", prediction: "Teamwork will propel you forward.", image: "images/runes/rune_18.png" },
    { name: "Mannaz", symbol: "ᛗ", meaning: "Humanidad, comunidad, autoconocimiento.", prediction: "Seek balance within yourself and others.", image: "images/runes/rune_19.png" },
    { name: "Laguz", symbol: "ᛚ", meaning: "Intuición, emociones, fluidez.", prediction: "Trust your instincts to navigate challenges.", image: "images/runes/rune_20.png" },
    { name: "Ingwaz", symbol: "ᛝ", meaning: "Fertilidad, potencial, finalización.", prediction: "Your efforts will soon bear fruit.", image: "images/runes/rune_21.png" },
    { name: "Dagaz", symbol: "ᛞ", meaning: "Transformación, esperanza, claridad.", prediction: "A breakthrough will bring new light.", image: "images/runes/rune_22.png" },
    { name: "Othala", symbol: "ᛟ", meaning: "Hogar, herencia, legado.", prediction: "Focus on family and roots for stability.", image: "images/runes/rune_23.png" }
];

// Tarot Card Logic
const tarotContainer = document.getElementById('tarot-cards');
const tarotResult = document.getElementById('tarot-result');
const resetTarotButton = document.getElementById('reset-tarot');
let selectedTarotCards = [];

function renderTarotCards() {
    tarotContainer.innerHTML = '';
    const shuffledCards = tarotCards.sort(() => Math.random() - 0.5).slice(0, 10);
    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('tarot-card');
        cardElement.style.setProperty('--index', index);
        cardElement.innerHTML = `
            <div class="tarot-card-inner">
                <div class="card-front"></div>
                <div class="card-back" style="background-image: url('${card.image}');"></div>
            </div>
        `;
        cardElement.addEventListener('click', () => selectTarotCard(card, cardElement));
        tarotContainer.appendChild(cardElement);
    });
}

function selectTarotCard(card, cardElement) {
    if (selectedTarotCards.length < 3 && !selectedTarotCards.includes(card)) {
        selectedTarotCards.push(card);
        cardElement.classList.add('flipped');
        tarotResult.innerHTML += `
            <div>
                <h3>${card.name}</h3>
                <img src="${card.image}" alt="${card.name}" style="width: 140px; border-radius: 12px;">
                <p>${card.meaning}</p>
            </div>
        `;
        if (selectedTarotCards.length === 3) {
            tarotContainer.querySelectorAll('.tarot-card').forEach(card => card.style.pointerEvents = 'none');
        }
    }
}

resetTarotButton.addEventListener('click', () => {
    selectedTarotCards = [];
    tarotResult.innerHTML = '';
    renderTarotCards();
    tarotContainer.querySelectorAll('.tarot-card').forEach(card => card.style.pointerEvents = 'auto');
});

// Rune Logic
const runeContainer = document.getElementById('rune-cards');
const runeResult = document.getElementById('rune-result');
const resetRunesButton = document.getElementById('reset-runes');
let selectedRunes = [];

function renderRunes() {
    runeContainer.innerHTML = '';
    const shuffledRunes = runes.sort(() => Math.random() - 0.5).slice(0, 10);
    shuffledRunes.forEach((rune, index) => {
        const runeElement = document.createElement('div');
        runeElement.classList.add('rune-card');
        runeElement.style.setProperty('--index', index);
        runeElement.innerHTML = `
            <div class="rune-card-inner">
                <div class="card-front"></div>
                <div class="card-back" style="background-image: url('${rune.image}');"></div>
            </div>
        `;
        runeElement.addEventListener('click', () => selectRune(rune, runeElement));
        runeContainer.appendChild(runeElement);
    });
}

function selectRune(rune, runeElement) {
    if (selectedRunes.length < 3 && !selectedRunes.includes(rune)) {
        selectedRunes.push(rune);
        runeElement.classList.add('flipped');
        runeResult.innerHTML += `
            <div>
                <h3>${rune.name} (${rune.symbol})</h3>
                <img src="${rune.image}" alt="${rune.name}" style="width: 100px; border-radius: 12px;">
                <p><strong>Significado:</strong> ${rune.meaning}</p>
                <p><strong>Predicción:</strong> ${rune.prediction}</p>
            </div>
        `;
        if (selectedRunes.length === 3) {
            runeContainer.querySelectorAll('.rune-card').forEach(rune => rune.style.pointerEvents = 'none');
        }
    }
}

resetRunesButton.addEventListener('click', () => {
    selectedRunes = [];
    runeResult.innerHTML = '';
    renderRunes();
    runeContainer.querySelectorAll('.rune-card').forEach(rune => rune.style.pointerEvents = 'auto');
});

// Initial Render
renderTarotCards();
renderRunes();

// Chat Functionality
const chatBox = document.getElementById('chat-box');
document.getElementById('toggle-chat').addEventListener('click', () => {
    chatBox.classList.toggle('active');
});
document.getElementById('send-chat').addEventListener('click', () => {
    const message = document.getElementById('chat-message').value;
    if (message) {
        alert('Mensaje enviado: ' + message);
        document.getElementById('chat-message').value = '';
    }
});

// Contact Form Submission
document.getElementById('submit-contact').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        alert('Formulario enviado. ¡Gracias por tu mensaje!');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Newsletter Subscription
document.getElementById('submit-newsletter').addEventListener('click', () => {
    const email = document.getElementById('newsletter-email').value;
    if (email) {
        alert('¡Suscrito correctamente a la newsletter!');
    } else {
        alert('Por favor, ingresa un email válido.');
    }
});

// Scroll Animation for Sections
const sections = document.querySelectorAll('.animate-section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-section');
        }
    });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));