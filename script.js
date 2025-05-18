// Bug #5 (Fixed): JavaScript error - used getElementbyId instead of getElementById. Now corrected.
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value.trim();
  const message = document.getElementById('formMessage');

  // Modern email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    message.style.color = '#ff4d4f';
    message.textContent = 'Please enter a valid email address.';
    return;
  }

  message.style.color = '#00c48c';
  message.textContent = 'Thanks for subscribing! Check your inbox for updates.';

  // Optionally clear the input after success
  document.getElementById('emailInput').value = '';

  // Optionally, show a modern toast or modal (if desired)
  // const modal = new bootstrap.Modal(document.getElementById('newsletterModal'));
  // modal.show();
});
