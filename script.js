document.addEventListener('DOMContentLoaded', function() {
  // MENU MOBILE
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mainMenu');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => menu.classList.remove('active'));
    });
  }

  // FADE-IN NAS SEÇÕES
  document.querySelectorAll('section, .footer, .header').forEach(el => {
    el.classList.add('fade-prepare');
  });
  const fadeSections = document.querySelectorAll('.fade-prepare');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('fade-in');
    });
  }, { threshold: 0.18 });
  fadeSections.forEach(section => observer.observe(section));

  // ROLAGEM SUAVE
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // EFEITO DE CLIQUE EM BOTÃO
  document.querySelectorAll('.servico-btn, .hero-btn').forEach(btn => {
    btn.addEventListener('mousedown', () => btn.classList.add('clicado'));
    btn.addEventListener('mouseup', () => btn.classList.remove('clicado'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('clicado'));
    btn.addEventListener('touchend', () => btn.classList.remove('clicado'));
  });
});
