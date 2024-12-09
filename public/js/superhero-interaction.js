document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            const heroId = e.target.dataset.id;

            try {
                const response = await fetch(`/api/superheroes/toggle-like/${heroId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const updatedHero = await response.json();
                    e.target.classList.toggle('liked', updatedHero.liked);
                }
            } catch (error) {
                console.error('Error toggling like:', error);
            }
        });
    });
});