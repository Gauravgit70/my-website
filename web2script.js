document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const imageGallery = document.getElementById('image-gallery');
    const errorMessage = document.getElementById('error-message');

    function searchProjects(query) {
        const cards = imageGallery.getElementsByClassName('image-card');
        let found = false;

        if (query.trim() === '') {
            // Show all items if query is empty
            for (let card of cards) {
                card.style.display = '';
            }
            errorMessage.classList.add('hidden');
            return;
        }

        for (let card of cards) {
            const projectName = card.getAttribute('data-name').toLowerCase();
            if (projectName.includes(query.toLowerCase())) {
                card.style.display = ''; // Show the matching card
                found = true;
            } else {
                card.style.display = 'none'; // Hide the non-matching card
            }
        }

        if (!found) {
            errorMessage.textContent = 'No projects found.';
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.add('hidden');
        }
    }

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        searchProjects(query);
    });

    // Optional: Allow pressing Enter to trigger search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});
