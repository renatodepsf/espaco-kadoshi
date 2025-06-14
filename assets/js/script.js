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

 // EFEITO TELA DE ENTRADA
window.addEventListener("load", () => {
  const flor = document.querySelector(".flor-intro");
  const tela = document.getElementById("tela-inicial");

  // Aplica o efeito "dissolver" de entrada
  flor.classList.add("aparecer");

  setTimeout(() => {
    tela.style.opacity = "0";
    setTimeout(() => {
      tela.remove();

      // Fade-in nas seções do conteúdo
      document.querySelectorAll('section, .footer, .header').forEach(el => {
        el.classList.add('fade-prepare');
      });

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      }, { threshold: 0.18 });

      document.querySelectorAll('.fade-prepare').forEach(el => observer.observe(el));
    }, 800); // mesma duração do transition de tela
  }, 4000); // flor aparece por 4 segundos
});
//
// // TELA DE ENTRADA - MOSTRA APENAS 1 VEZ
// window.addEventListener("load", () => {
//   const flor = document.querySelector(".flor-intro");
//   const tela = document.getElementById("tela-inicial");
//
//   const introJaVisto = localStorage.getItem("introVisto");
//
//   if (introJaVisto) {
//     // Usuário já viu a introdução: remove a tela imediatamente
//     tela.remove();
//
//     // Ativa fade-in do conteúdo principal
//     document.querySelectorAll('section, .footer, .header').forEach(el => {
//       el.classList.add('fade-prepare');
//     });
//
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('fade-in');
//         }
//       });
//     }, { threshold: 0.18 });
//
//     document.querySelectorAll('.fade-prepare').forEach(el => observer.observe(el));
//   } else {
//     // Primeira vez: exibe a flor com efeito dissolver
//     flor.classList.add("aparecer");
//
//     setTimeout(() => {
//       tela.style.opacity = "0";
//
//       setTimeout(() => {
//         tela.remove();
//         localStorage.setItem("introVisto", "true");
//
//         // Ativa fade-in das seções
//         document.querySelectorAll('section, .footer, .header').forEach(el => {
//           el.classList.add('fade-prepare');
//         });
//
//         const observer = new IntersectionObserver(entries => {
//           entries.forEach(entry => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add('fade-in');
//             }
//           });
//         }, { threshold: 0.18 });
//
//         document.querySelectorAll('.fade-prepare').forEach(el => observer.observe(el));
//       }, 800); // duração da transição da tela
//     }, 4000); // tempo da flor visível
//   }
// });

// // BOTAO FLUTUANTE
// document.getElementById('botaoChat').addEventListener('click', function() {
//   window.open('https://api.whatsapp.com/send?phone=5532991397354&text=Olá! Quero tirar uma dúvida.', '_blank');
// });

/* TELA DE CADASTRO */
// Abrir e fechar a tela de cadastro
document.getElementById('abrirCadastro').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('tela-cadastro').classList.remove('oculto');
  window.scrollTo(0, 0);
});

document.getElementById('fecharCadastro').addEventListener('click', function () {
  document.getElementById('tela-cadastro').classList.add('oculto');
});

// configuracoes do formulario de cadastro

document.getElementById("formularioCadastro").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const servico = document.getElementById("servico").value.trim();
  let whatsappCliente = document.getElementById("whatsapp").value.trim();

  whatsappCliente = whatsappCliente.replace(/\D/g, '');

  if (!whatsappCliente.startsWith("55")) {
    whatsappCliente = "55" + whatsappCliente;
  }

  if (!nome || !servico || whatsappCliente.length < 12) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const numeroProfissional = "5532991397354";

  const mensagem = `Novo cadastro recebido:\n\nNome: ${nome}\nTelefone: ${whatsappCliente}\nServiço solicitado: ${servico}`;
  const url = `https://wa.me/${numeroProfissional}?text=${encodeURIComponent(mensagem)}`;

  // Fecha a tela de cadastro antes de redirecionar
  document.getElementById('tela-cadastro').classList.add('oculto');

  // Redireciona diretamente para WhatsApp
  window.location.href = url;

  // Após retorno do WhatsApp, rola para o topo (opcional: use setTimeout caso necessário)
  window.addEventListener("focus", () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  }, { once: true });
});
