document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu button
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    // Get the navigation links
    const navLinks = document.querySelector('.nav-links');
    
    // Add click event listener to the mobile menu button
    mobileMenuBtn.addEventListener('click', function() {
      // Toggle the 'active' class on the nav links to show/hide the menu
      navLinks.classList.toggle('show');
    });
  });