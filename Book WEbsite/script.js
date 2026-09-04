      const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 24) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // WhatsApp Order
const WHATSAPP_NUMBER = "917007052237";

function orderOnWhatsApp() {
  const message = `नमस्ते! मुझे "वालेकुम-प्रणाम" की एक कॉपी ऑर्डर करनी है।

📖 Book Price: ₹399
🚚 Delivery: ₹50
💰 Total: ₹449

कृपया ऑर्डर की प्रक्रिया बताएं।

नाम:
मोबाइल नंबर:
पूरा पता:
पिनकोड:`;

  const whatsappURL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);

window.open(whatsappURL, '_blank');
}

document.querySelectorAll('.whatsapp-order').forEach(button => {
  button.addEventListener('click', orderOnWhatsApp);
});