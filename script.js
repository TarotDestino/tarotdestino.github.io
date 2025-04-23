// Array of 78 Marseille Tarot Cards with Brief Meanings
const tarotCards = [
    { name: "El Loco", meaning: "Nuevos comienzos, espontaneidad, pero cuidado con la impulsividad." },
    { name: "El Mago", meaning: "Habilidad, creatividad y manifestación de tus deseos." },
    { name: "La Sacerdotisa", meaning: "Intuición, sabiduría oculta y conexión espiritual." },
    { name: "La Emperatriz", meaning: "Abundancia, fertilidad y conexión con la naturaleza." },
    { name: "El Emperador", meaning: "Autoridad, estructura y control." },
    { name: "El Sumo Sacerdote", meaning: "Tradición, guía espiritual y conformidad." },
    { name: "Los Enamorados", meaning: "Amor, decisiones importantes y armonía." },
    { name: "El Carro", meaning: "Determinación, victoria y dirección clara." },
    { name: "La Justicia", meaning: "Equilibrio, verdad y consecuencias justas." },
    { name: "El Ermitaño", meaning: "Introspección, búsqueda de la verdad interior." },
    { name: "La Rueda de la Fortuna", meaning: "Cambio, ciclos y destino." },
    { name: "La Fuerza", meaning: "Coraje, autocontrol y fuerza interior." },
    { name: "El Colgado", meaning: "Sacrificio, pausa y nueva perspectiva." },
    { name: "La Muerte", meaning: "Transformación, finales y nuevos comienzos." },
    { name: "La Templanza", meaning: "Equilibrio, moderación y armonía." },
    { name: "El Diablo", meaning: "Tentación, ataduras y materialismo." },
    { name: "La Torre", meaning: "Cambio repentino, destrucción y revelación." },
    { name: "La Estrella", meaning: "Esperanza, inspiración y renovación." },
    { name: "La Luna", meaning: "Ilusión, intuición y subconsciente." },
    { name: "El Sol", meaning: "Éxito, vitalidad y claridad." },
    { name: "El Juicio", meaning: "Renacimiento, evaluación y despertar." },
    { name: "El Mundo", meaning: "Culminación, éxito y unidad." },
    { name: "As de Bastos", meaning: "Inspiración, nuevos proyectos y energía creativa." },
    { name: "Dos de Bastos", meaning: "Planificación, decisiones y expansión." },
    { name: "Tres de Bastos", meaning: "Progreso, visión a largo plazo y oportunidades." },
    { name: "Cuatro de Bastos", meaning: "Celebración, estabilidad y comunidad." },
    { name: "Cinco de Bastos", meaning: "Competencia, conflicto y desafíos." },
    { name: "Seis de Bastos", meaning: "Victoria, reconocimiento y éxito público." },
    { name: "Siete de Bastos", meaning: "Defensa, perseverancia y resistencia." },
    { name: "Ocho de Bastos", meaning: "Movimiento rápido, progreso y acción." },
    { name: "Nueve de Bastos", meaning: "Resiliencia, determinación y protección." },
    { name: "Diez de Bastos", meaning: "Carga, responsabilidad y trabajo duro." },
    { name: "Sota de Bastos", meaning: "Entusiasmo, exploración y mensajes." },
    { name: "Caballero de Bastos", meaning: "Aventura, pasión y acción impulsiva." },
    { name: "Reina de Bastos", meaning: "Confianza, liderazgo y creatividad." },
    { name: "Rey de Bastos", meaning: "Visión, liderazgo y emprendimiento." },
    { name: "As de Copas", meaning: "Amor, emociones profundas y nuevos sentimientos." },
    { name: "Dos de Copas", meaning: "Unión, amor mutuo y conexión emocional." },
    { name: "Tres de Copas", meaning: "Amistad, celebración y alegría." },
    { name: "Cuatro de Copas", meaning: "Apathía, reevaluación y desconexión." },
    { name: "Cinco de Copas", meaning: "Pérdida, arrepentimiento y tristeza." },
    { name: "Seis de Copas", meaning: "Nostalgia, recuerdos y reencuentros." },
    { name: "Siete de Copas", meaning: "Ilusiones, opciones y sueños." },
    { name: "Ocho de Copas", meaning: "Abandono, búsqueda y transición." },
    { name: "Nueve de Copas", meaning: "Satisfacción, deseos cumplidos y felicidad." },
    { name: "Diez de Copas", meaning: "Armonía, familia y felicidad duradera." },
    { name: "Sota de Copas", meaning: "Sensibilidad, mensajes emocionales y creatividad." },
    { name: "Caballero de Copas", meaning: "Romanticismo, idealismo y encanto." },
    { name: "Reina de Copas", meaning: "Empatía, intuición y cuidado emocional." },
    { name: "Rey de Copas", meaning: "Control emocional, compasión y madurez." },
    { name: "As de Espadas", meaning: "Claridad, verdad y nuevos pensamientos." },
    { name: "Dos de Espadas", meaning: "Indecisión, estancamiento y equilibrio tenso." },
    { name: "Tres de Espadas", meaning: "Dolor, traición y corazón roto." },
    { name: "Cuatro de Espadas", meaning: "Descanso, recuperación y reflexión." },
    { name: "Cinco de Espadas", meaning: "Conflicto, derrota y egoísmo." },
    { name: "Seis de Espadas", meaning: "Transición, viaje y sanación." },
    { name: "Siete de Espadas", meaning: "Engaño, estrategia y astucia." },
    { name: "Ocho de Espadas", meaning: "Restricción, confusión y limitaciones." },
    { name: "Nueve de Espadas", meaning: "Ansiedad, pesadillas y preocupación." },
    { name: "Diez de Espadas", meaning: "Traición, final doloroso y colapso." },
    { name: "Sota de Espadas", meaning: "Curiosidad, vigilancia y nuevas ideas." },
    { name: "Caballero de Espadas", meaning: "Ambición, acción rápida y determinación." },
    { name: "Reina de Espadas", meaning: "Claridad, independencia y honestidad." },
    { name: "Rey de Espadas", meaning: "Autoridad intelectual, verdad y lógica." },
    { name: "As de Oros", meaning: "Prosperidad, nuevos comienzos financieros." },
    { name: "Dos de Oros", meaning: "Equilibrio, adaptabilidad y multitarea." },
    { name: "Tres de Oros", meaning: "Colaboración, trabajo en equipo y maestría." },
    { name: "Cuatro de Oros", meaning: "Seguridad, control y avaricia." },
    { name: "Cinco de Oros", meaning: "Pérdida, inseguridad y dificultades." },
    { name: "Seis de Oros", meaning: "Generosidad, caridad y equilibrio." },
    { name: "Siete de Oros", meaning: "Paciencia, esfuerzo y crecimiento lento." },
    { name: "Ocho de Oros", meaning: "Dedicación, aprendizaje y trabajo duro." },
    { name: "Nueve de Oros", meaning: "Independencia, lujo y autosuficiencia." },
    { name: "Diez de Oros", meaning: "Riqueza, legado y estabilidad familiar." },
    { name: "Sota de Oros", meaning: "Oportunidades, aprendizaje y ambición." },
    { name: "Caballero de Oros", meaning: "Responsabilidad, trabajo duro y fiabilidad." },
    { name: "Reina de Oros", meaning: "Nutrición, seguridad y practicidad." },
    { name: "Rey de Oros", meaning: "Éxito, riqueza y liderazgo práctico." }
];

// Tarot Card Logic
const tarotContainer = document.getElementById('tarot-cards');
const tarotResult = document.getElementById('tarot-result');
const resetButton = document.getElementById('reset-cards');
let selectedCards = [];

function renderCards() {
    tarotContainer.innerHTML = '';
    const shuffledCards = tarotCards.sort(() => Math.random() - 0.5).slice(0, 10);
    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('tarot-card');
        cardElement.innerHTML = `
            <div class="tarot-card-inner">
                <div class="card-front"></div>
                <div class="card-back">${card.name}<br>${card.meaning}</div>
            </div>
        `;
        cardElement.addEventListener('click', () => selectCard(card, cardElement));
        tarotContainer.appendChild(cardElement);
    });
}

function selectCard(card, cardElement) {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
        selectedCards.push(card);
        cardElement.classList.add('flipped');
        tarotResult.innerHTML += `<p><strong>${card.name}:</strong> ${card.meaning}</p>`;
        if (selectedCards.length === 3) {
            tarotContainer.querySelectorAll('.tarot-card').forEach(card => card.style.pointerEvents = 'none');
        }
    }
}

resetButton.addEventListener('click', () => {
    selectedCards = [];
    tarotResult.innerHTML = '';
    renderCards();
    tarotContainer.querySelectorAll('.tarot-card').forEach(card => card.style.pointerEvents = 'auto');
});

// Initial Render
renderCards();

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