const toggleBtn = document.getElementById('toggleBtn');

// Set an event listener for click events
toggleBtn.addEventListener('click', function() {
  // Toggle between "ON" and "OFF" states
  if (toggleBtn.textContent === 'OFF') {
    toggleBtn.textContent = 'ON';
    document.body.style.backgroundColor = 'darkslategray'; // Set dark mode color
  } else {
    toggleBtn.textContent = 'OFF';
    document.body.style.backgroundColor = 'white'; // Set light mode color
  }

  // Toggle the 'active' class to trigger the slide-in animation
  toggleBtn.classList.toggle('active');
});
