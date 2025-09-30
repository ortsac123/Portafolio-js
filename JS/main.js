emailjs.init("nWMnYPnYv8tTWJXBR"); // Asegúrate de que este ID sea correcto y seguro.

// Inicialización de partículas (tsParticles)
tsParticles.load("tsparticles", {
    background: { color: "#f3f2f2ff" },
    particles: {
        number: { value: 70 },
        color: { value: "#e8c6c6ff" },
        links: { enable: true, color: "#253bdfff", distance: 70 },
        move: { enable: true, speed: 2 }
    }
});

// Ajusta dinámicamente el padding-top del body para el header fijo
function updateHeaderHeight() {
    const header = document.querySelector('header');
    if (!header) return;
    const h = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-height', `${Math.ceil(h)}px`);
}

// Lógica de Typed.js para el texto de bienvenida
function initTyped() {
    new Typed("#typed-name", {
        strings: [" Soy Rafael Castro"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 500,
        loop: false,
        showCursor: true,
        cursorChar: "|"
    });
}

// Lógica de Formulario de Contacto
function setupContactForm() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const feedback = document.getElementById("form-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        feedback.classList.remove("error", "success");
        feedback.textContent = "";

        // Validación
        if (nameInput.value.trim() === "") {
            feedback.textContent = "❌ Por favor ingrese su nombre";
            feedback.classList.add("error");
            return;
        }

        if (emailInput.value.trim() === "" || messageInput.value.trim() === "") {
            feedback.textContent = "❌ Por favor completa todos los campos";
            feedback.classList.add("error");
            return;
        }

        if (messageInput.value.trim().length < 10) {
            feedback.textContent = "❌ El mensaje debe tener al menos 10 caracteres";
            feedback.classList.add("error");
            return;
        }

        // 🚀 Envío con EmailJS
        emailjs.send("service_dz668jg", "template_6bgg7rq", {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        })
            .then(() => {
                feedback.textContent = "✅ Tu mensaje ha sido enviado con éxito";
                feedback.classList.add("success");
                form.reset();
            })
            .catch((error) => {
                console.error("Error al enviar email:", error);
                feedback.textContent = "❌ Ocurrió un error al enviar el mensaje. Intenta de nuevo más tarde.";
                feedback.classList.add("error");
            });
    });
}

// Lógica de Menú de Navegación (activación de clase 'active' y cierre en móvil)
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    // Función para activar el enlace de la sección actual
    const activateLink = () => {
        let current = 'inicio';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - parseInt(document.documentElement.style.getPropertyValue('--header-height'));
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    };

    // Escuchar scroll para activar el link
    window.addEventListener('scroll', activateLink);

    // Lógica del menú hamburguesa (para móviles)
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Cerrar menú al hacer clic en un enlace (solo en móvil)
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 767) {
                navMenu.classList.remove('show');
            }
        });
    });
}


// Ejecutar funciones al cargar y al redimensionar
window.addEventListener('load', () => {
    updateHeaderHeight();
    initTyped();
    setupContactForm();
    setupNavigation();
});
window.addEventListener('resize', updateHeaderHeight);