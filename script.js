document.addEventListener('DOMContentLoaded', () => {
    const showCharactersBtn = document.getElementById('show-characters');
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const items = document.querySelectorAll('.carousel-item');
    const searchBar = document.getElementById('searchBar');
    let currentIndex = 0;

    showCharactersBtn.addEventListener('click', () => {
        document.querySelector('.intro').style.display = 'none';
        carousel.style.display = 'flex';
    });

    function updateCarousel() {
        items.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase().trim();
        let foundIndex = -1;

        items.forEach((item, index) => {
            const characterName = item.getAttribute('data-character');
            if (characterName.includes(query)) {
                foundIndex = index;
            }
        });

        if (foundIndex !== -1) {
            currentIndex = foundIndex;
            updateCarousel();
        }
    });
});

