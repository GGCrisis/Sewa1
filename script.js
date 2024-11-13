// Scroll-triggered animations
document.addEventListener('scroll', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in');
    const windowHeight = window.innerHeight;

    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        // Trigger animation when the element is in the viewport
        if (elementTop < windowHeight - 50) {
            if (element.classList.contains('fade-in')) {
                element.classList.add('fade-in-active');
            } else if (element.classList.contains('slide-in')) {
                element.classList.add('slide-in-active');
            }
        }
    });
});

// Eye-following cursor effect
document.addEventListener('mousemove', (e) => {
    const eyesContainer = document.querySelector('.eyes');
    const eyes = document.querySelectorAll('.eyes > div');

    if (!eyesContainer || eyes.length < 2) return;

    const containerRect = eyesContainer.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const maxDistance = eyes[0].offsetWidth / 3;

    const moveX = Math.cos(angle) * maxDistance;
    const moveY = Math.sin(angle) * maxDistance;

    eyes.forEach(eye => {
        const eyeBall = eye.querySelector('i');
        eyeBall.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
