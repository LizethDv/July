document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener el nombre del formulario
    const name = document.getElementById('name').value;

    // Mensaje de confirmación
    const message = `¡Gracias, ${name}, por confirmar tu asistencia! Te esperamos✨`;
    document.getElementById('confirmation-message').textContent = message;

    // Número de WhatsApp donde se enviará la confirmación
    const phoneNumber = '5613925902';

    // Mensaje de WhatsApp
    const whatsappMessage = `Hola, soy ${name}. Confirmo mi asistencia al bautizo de July.`;

    // URL de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Abrir ventana de WhatsApp
    window.open(whatsappURL, '_blank');
});

// animación

document.addEventListener("DOMContentLoaded", function() {
    const img1 = document.querySelector("img");
    const img2 = document.querySelector(".img2");

    function addSwingAnimation() {
        img1.classList.add("swing");
        img2.classList.add("swing");
        
        // Remover la clase después de 3 segundos para permitir volver a añadirla en futuros eventos
        setTimeout(() => {
            img1.classList.remove("swing");
            img2.classList.remove("swing");
        }, 3000);
    }

    // Añadir la animación al cargar la página
    addSwingAnimation();
    img1.addEventListener("mouseover", addSwingAnimation);
    img2.addEventListener("mouseover", addSwingAnimation);
})
