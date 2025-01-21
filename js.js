// Modal handling for project details
const modals = document.querySelectorAll('.view-details');
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');

modals.forEach((button) => {
    button.addEventListener('click', (event) => {
        const project = event.target.getAttribute('data-modal');
        showModal(project);
    });
});

function showModal(project) {
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    if (project === 'project1') {
        modalTitle.textContent = 'Intelligent Traffic System';
        modalDescription.textContent = 'Built a predictive traffic model for smarter city planning and efficient management of resources.';
    } else if (project === 'project2') {
        modalTitle.textContent = 'Twitter Entity Recognition';
        modalDescription.textContent = 'Developed a named entity recognition system to identify key entities in Twitter data.';
    }

    modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
