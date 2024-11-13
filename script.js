
// Inicio de uma função 
function toggleMenu() {
    // acessos os elementos a ser modificados
    const navLinks = document.querySelector('.nav-links')
    const hamburguer = document.querySelector('.hamburguer')
    // Inserimos uma nova classe
    navLinks.classList.toggle('active')

  
    if (navLinks.classList.contains('active')) {
        hamburguer.innerHTML = '&times;'
    } else {
        hamburguer.innerHTML = '&#9776;'
    }
}

// logica para ativar os botões das etapas
document.querySelectorAll('.learn-more-btn').forEach(button => {

    button.addEventListener('click', () => {

         const modal = document.getElementById(button.dataset.modal)

         modal.style.display = 'flex'
    })

})
document.querySelectorAll('.close-btn').forEach(button => {

  button.addEventListener('click', () => {
      button.closest('.modal').style.display = 'none'
  })
})

window.addEventListener('click', (event) => {
 
  if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none'
  }

})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// logica para ativar após clicar em serviços
document.querySelectorAll('.servico-card').forEach(div => {

    div.addEventListener('click', () => {

         const aparecer = document.getElementById(div.dataset.aparecer)

         aparecer.style.display = 'flex'
    })

})
document.querySelectorAll('.aparecer').forEach(div => {

  div.addEventListener('click', () => {
      div.closest('.aparecer').style.display = 'none'
  })
})

window.addEventListener('click', (event) => {
 
  if (event.target.classList.contains('aparecer')) {
      event.target.style.display = 'none'
  }

})

