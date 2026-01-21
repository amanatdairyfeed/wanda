document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('fa-times'); // Toggle X icon if using FontAwesome
            hamburger.classList.toggle('fa-bars');
        });
    }

    // Language Aware Links (Simple Helper)
    const isUrdu = document.body.classList.contains('urdu-page');

    // Floating Buttons Injection
    const floatingDiv = document.createElement('div');
    floatingDiv.className = 'floating-btns';

    // Create WhatsApp Button
    const waLink = document.createElement('a');
    waLink.href = 'https://wa.me/923020019422'; // Replace with actual number
    waLink.target = '_blank';
    waLink.className = 'float-btn whatsapp-btn';
    waLink.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    waLink.title = isUrdu ? 'واٹس ایپ پر رابطہ کریں' : 'Chat on WhatsApp';

    // Create Scroll Top Button
    const topBtn = document.createElement('div');
    topBtn.className = 'float-btn scroll-top-btn';
    topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    floatingDiv.appendChild(topBtn); // Top button above WA or below? Usually WA is most prominent.
    floatingDiv.appendChild(waLink);

    document.body.appendChild(floatingDiv);

    // Scroll Logic for Top Button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.classList.add('active');
        } else {
            topBtn.classList.remove('active');
        }

        // Header logic from before...
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '0';
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            // header.style.padding = '10px 0'; 
            header.style.boxShadow = 'none';
        }
    });

});
