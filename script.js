const mobileMenu = document.getElementById('menu-mobile');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

function sendToWhatsApp(id) {
    const phoneNumber = "5355105070"; // Reemplaza con tu número de WhatsApp
    const message = `Hola, estoy interesado en el producto con ID: ${id}. ¿Está disponible?`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = url;
}