document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const toggleButton = item.querySelector('.toggle-btn');
            const isVisible = answer.style.display === 'block';
            
            if (isVisible) {
                answer.style.display = 'none';
                toggleButton.textContent = '+';
            } else {
                answer.style.display = 'block';
                toggleButton.textContent = '-';
            }
        });
    });
});
