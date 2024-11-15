function toggleDescription(id) {
    const description = document.getElementById(`desc-${id}`);
    description.classList.toggle('show');
}

// Close description when clicking outside
document.addEventListener('click', function (event) {
    const openDescriptions = document.querySelectorAll('.description-overlay.show');
    openDescriptions.forEach(desc => {
        if (!desc.contains(event.target) && !event.target.classList.contains('details-btn')) {
            desc.classList.remove('show');
        }
    });
});
