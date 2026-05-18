// ========== VARIABLES GLOBALES ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('artModal');
const closeBtn = document.querySelector('.close');
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('galleryGrid');

// ========== MENÚ MÓVIL ==========
function toggleMenu() {
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

// Cerrar menú cuando se hace clic en un link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========== CARGA INICIAL DE GALERÍA ==========
function loadGallery(filter = 'all') {
    galleryGrid.innerHTML = '';

    const filteredArtworks = filter === 'all'
        ? artworks
        : artworks.filter(art => art.category === filter);

    filteredArtworks.forEach(art => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${art.image}" alt="${art.title}" class="gallery-image" loading="lazy">
            <div class="gallery-info">
                <h3>${art.title}</h3>
                <p>${art.technique}</p>
                <p>${art.size}</p>
                <div class="gallery-price">${art.price}</div>
            </div>
        `;

        item.addEventListener('click', () => openModal(art));
        galleryGrid.appendChild(item);
    });
}

// ========== SISTEMA DE FILTROS ==========
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');

        // Cargar galería filtrada
        const filter = button.getAttribute('data-filter');
        loadGallery(filter);
    });
});

// ========== MODAL ==========
function openModal(art) {
    document.getElementById('modalImage').src = art.image;
    document.getElementById('modalTitle').textContent = art.title;
    document.getElementById('modalTechnique').textContent = `Técnica: ${art.technique}`;
    document.getElementById('modalSize').textContent = `Tamaño: ${art.size}`;
    document.getElementById('modalYear').textContent = `Año: ${art.year}`;
    document.getElementById('modalPrice').textContent = `Precio: ${art.price}`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evitar scroll del body
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========== SCROLL SUAVE PARA BOTONES ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== EFECTO SCROLL ANIMADO ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInDown 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observar elementos con clase gallery-item (solo cuando se carguen)
setTimeout(() => {
    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });
}, 100);

// ========== VALIDACIÓN Y MEJORAS DE UX ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Jaibana Art Workshop cargado correctamente');
    console.log(`Total de obras disponibles: ${artworks.length}`);

    // Cargar galería inicial
    loadGallery('all');

    // Agregar efectos de hover suaves
    addHoverEffects();
});

// ========== FUNCIÓN DE EFECTOS DE HOVER ==========
function addHoverEffects() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// ========== CONTACTO POR BOTÓN ==========
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ========== NÚMERO DE OBRAS POR CATEGORÍA ==========
function getStats() {
    const stats = {
        total: artworks.length,
        grande: artworks.filter(a => a.category === 'grande').length,
        mediano: artworks.filter(a => a.category === 'mediano').length,
        pequeño: artworks.filter(a => a.category === 'pequeño').length
    };
    return stats;
}

// Mostrar en consola para propósitos de desarrollo
console.log('Estadísticas de obras:', getStats());

// ========== SOPORTE PARA LAZY LOADING (OPCIONAL) ==========
// Permite cargar imágenes de forma más eficiente
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== SOPORTE PARA COMPARTIR EN REDES (OPCIONAL) ==========
function shareArtwork(art) {
    const text = `Mira esta increíble obra de ${art.title} de Jaibana Art Workshop`;

    // Crear opciones de compartir
    const shareOptions = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(text)}`,
        instagram: 'https://www.instagram.com/jaibanart_workshop/',
        facebook: 'https://www.facebook.com/jose.m.londonomorales'
    };

    return shareOptions;
}

// ========== FUNCIÓN DE BÚSQUEDA (OPCIONAL - PARA FUTURAS MEJORAS) ==========
function searchArtworks(query) {
    return artworks.filter(art =>
        art.title.toLowerCase().includes(query.toLowerCase()) ||
        art.technique.toLowerCase().includes(query.toLowerCase()) ||
        art.size.toLowerCase().includes(query.toLowerCase())
    );
}

// ========== MANEJO DE ERRORES DE IMÁGENES ==========
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn(`Error cargando imagen: ${e.target.src}`);
        // Aquí podrías agregar una imagen placeholder
    }
}, true);

// ========== ANALÍTICA SIMPLE ==========
class Analytics {
    static trackGalleryView() {
        console.log('Galería vista:', new Date());
    }

    static trackArtworkView(artworkId) {
        console.log(`Obra ${artworkId} visualizada:`, new Date());
    }

    static trackFilterChange(filter) {
        console.log(`Filtro aplicado: ${filter}`, new Date());
    }
}

// Rastrear cambios de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        Analytics.trackFilterChange(filter);
    });
});

// Rastrear vista de obras
document.addEventListener('click', (e) => {
    if (e.target.closest('.gallery-item')) {
        const artworkTitle = e.target.closest('.gallery-item').querySelector('h3')?.textContent;
        console.log('Obra seleccionada:', artworkTitle);
    }
});
