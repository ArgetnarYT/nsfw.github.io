document.addEventListener('DOMContentLoaded', (event) => {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            window.open('https://t.me/DokuXz', '_blank');
        });
    });
});
