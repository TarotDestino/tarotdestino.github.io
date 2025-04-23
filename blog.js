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