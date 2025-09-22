//Aca ira la logica de navegacion interactiva 
tsParticles.load("tsparticles", {
      background: { color: "#f3f2f2ff" },
      particles: {
        number: { value: 70 },
        color: { value: "#690303ff" },
        links: { enable: true, color: "#253bdfff", distance: 70 },
        move: { enable: true, speed: 2 }
      }
    });

    // Ajusta dinámicamente el padding-top para que el header fijo no tape el contenido
function updateHeaderHeight() {
  const header = document.querySelector('header');
  if (!header) return;
  // toma la altura exacta del header (incluye padding)
  const h = header.getBoundingClientRect().height;
  // guarda en variable CSS global para usarla en CSS
  document.documentElement.style.setProperty('--header-height', `${Math.ceil(h)}px`);
}

// Ejecutar al cargar y al redimensionar (recalcula si cambian tamaños)
window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);

 const normalText = "¡Hola! Soy ";  
  const highlightText = "Rafael Castro";  
  const speed = 100; // ms por letra
  let i = 0;
  let j = 0;

  function typeWriter() {
    const typingEl = document.getElementById("typing");

    if (i < normalText.length) {
      // Escribe el texto normal
      typingEl.innerHTML += normalText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else if (j < highlightText.length) {
      // Escribe el nombre dentro del span azul
      typingEl.innerHTML = normalText + 
        "<span class='text-highlight'>" + 
        highlightText.substring(0, j + 1) + 
        "</span>";
      j++;
      setTimeout(typeWriter, speed);
    }
  }

  document.addEventListener("DOMContentLoaded", typeWriter);