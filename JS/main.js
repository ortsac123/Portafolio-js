//Aca ira la logica de navegacion interactiva 

emailjs.init("nWMnYPnYv8tTWJXBR");
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

//  const normalText = "¡Hola! Soy ";  
//   const highlightText = "Rafael Castro";  
//   const speed = 100; // ms por letra
//   let i = 0;
//   let j = 0;

//   function typeWriter() {
//     const typingEl = document.getElementById("typing");

//     if (i < normalText.length) {
//       // Escribe el texto normal
//       typingEl.innerHTML += normalText.charAt(i);
//       i++;
//       setTimeout(typeWriter, speed);
//     } else if (j < highlightText.length) {
//       // Escribe el nombre dentro del span azul
//       typingEl.innerHTML = normalText + 
//         "<span class='text-highlight'>" + 
//         highlightText.substring(0, j + 1) + 
//         "</span>";
//       j++;
//       setTimeout(typeWriter, speed);
//     }
//   }

document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed-name", {
    strings: [" Soy Rafael Castro"], 
    typeSpeed: 80,      // Velocidad de escritura (ms por letra)
    backSpeed: 50,      // Velocidad de borrado
    backDelay: 1500,    // Tiempo antes de borrar
    startDelay: 500,    // Retraso inicial
    loop: true,         // Repite infinitamente
    showCursor: true,   // Muestra el cursor
    cursorChar: "|"     // Carácter del cursor
  });
});
  document.addEventListener("DOMContentLoaded", typeWriter);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const feedback = document.getElementById("form-message");
  const name = document.getElementById("name")

  // form.addEventListener("submit", function (e) {
  // e.preventDefault();

  // // Limpia clases previas
  // feedback.classList.remove("error", "success");

  // feedback.classList.remove("error", "success");

  // if (emailInput.value.trim() === "" || messageInput.value.trim() === "") {
  //   feedback.textContent = "❌ Por favor completa todos los campos";
  //   feedback.classList.add("error");
  // } else if (messageInput.value.trim().length < 10) {
  //   feedback.textContent = "❌ El mensaje debe tener al menos 10 caracteres";
  //   feedback.classList.add("error");
  // } else if (name.value.trim() === "") {
  //   feedback.textContent = "❌ Por favor ingrese su nombre";
  //   feedback.classList.add("error");
  // }
  
  // else {
  //   feedback.textContent = "✅ Tu mensaje ha sido enviado con éxito";
  //   feedback.classList.add("success");
  //   form.reset();
  // }
  // });

  form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Limpia clases previas
  feedback.classList.remove("error", "success");

  if (name.value.trim() === "") {
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
    name: name.value,
    email: emailInput.value,
    message: messageInput.value
  })
  .then(() => {
    feedback.textContent = "✅ Tu mensaje ha sido enviado con éxito";
    feedback.classList.add("success");
    form.reset();
  })
  .catch(() => {
    feedback.textContent = "❌ Ocurrió un error al enviar el mensaje";
    feedback.classList.add("error");
  });
});

});

