function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function setupSmoothScrolling() {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId.startsWith('#')) {
        e.preventDefault();

        const targetElement = document.getElementById(targetId.substring(1));

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', setupSmoothScrolling);