// Sample Blog Posts
const blogPosts = [
    {
        title: "Cómo Interpretar el Tarot de Marsella",
        image: "https://via.placeholder.com/600x300",
        excerpt: "Aprende los fundamentos para leer las cartas del Tarot de Marsella y descubre sus mensajes.",
        link: "#"
    },
    {
        title: "El Poder de las Runas Nórdicas",
        image: "https://via.placeholder.com/600x300",
        excerpt: "Explora el significado de las runas y cómo pueden guiarte en tu vida diaria.",
        link: "#"
    },
    {
        title: "Meditación para Conectar con tu Intuición",
        image: "https://via.placeholder.com/600x300",
        excerpt: "Prácticas simples para fortalecer tu conexión espiritual y escuchar tu voz interior.",
        link: "#"
    }
];

// Render Blog Posts
function renderBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    if (blogContainer) {
        blogContainer.innerHTML = '';
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'blog-post';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <img src="${post.image}" alt="${post.title}">
                <p>${post.excerpt}</p>
                <a href="${post.link}" class="btn">Leer Más</a>
            `;
            blogContainer.appendChild(postElement);
        });
    }
}

// Initialize Blog
document.addEventListener('DOMContentLoaded', renderBlogPosts);