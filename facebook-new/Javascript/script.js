// Get all the list items inside the middle ul
const middleIcons = document.querySelectorAll('.middle ul li');

// Add an event listener for each list item
middleIcons.forEach((icon) => {
    icon.addEventListener('click', function () {
        // Remove the active-icon class from all list items
        middleIcons.forEach((item) => {
            item.classList.remove('active');
        });
        // Add the active-icon class to the clicked list item
        this.classList.add('active');
    });
});






