document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');
  const form = document.getElementById("contact-form");

  // Load saved dark mode
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  // Set initial icon
  if (toggle) {
    toggle.innerHTML = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';

    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        toggle.innerHTML = '🌙';
      } else {
        localStorage.setItem('dark-mode', 'disabled');
        toggle.innerHTML = '☀️';
      }
    });
  }

  // Contact form submission
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      try {
        const res = await fetch("https://portfolio-4-3i49.onrender.com/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();
        alert(data.message);

        form.reset();
      } catch (error) {
        alert("Something went wrong. Please try again.");
        console.error(error);
      }
    });
  }
});
