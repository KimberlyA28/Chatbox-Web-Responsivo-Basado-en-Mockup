document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#2962FF'; // Blue hover background
            this.style.color = '#FFFFFF'; // Change text color on hover
        });

        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#FFFFFF'; // Revert background color
            this.style.color = '#2962FF'; // Revert text color
        });
    });
});