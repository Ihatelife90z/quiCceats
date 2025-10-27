/// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  if (logo) {
    // Replace the logo with your GIF
    logo.src = 'https://i.imgur.com/v7aEALe.gif';

    // Styling for the logo
    logo.style.width = '200px';
    logo.style.height = 'auto';
    logo.style.borderRadius = '12px'; // smooth corners
    logo.style.display = 'block';
    logo.style.margin = '0 auto'; // center horizontally
  } else {
    console.error('Logo element not found!');
  }
});
