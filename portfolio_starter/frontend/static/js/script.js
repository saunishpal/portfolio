document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');

  // Load saved mode from localStorage
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      toggle.innerHTML = '🌙';  // optional: change icon/text
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      toggle.innerHTML = '☀️';  // optional: change icon/text
    }
  });

  // Set initial toggle icon/text (optional)
  if (document.body.classList.contains('dark-mode')) {
    toggle.innerHTML = '🌙';
  } else {
    toggle.innerHTML = '☀️';
  }
});
