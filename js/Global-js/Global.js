//Animação do menu hamburger abrindo e fechando
function toggleMenu() {

    const menuToggle = document.getElementById("menu-toggle");
    const itens = document.getElementById("nav-links");

    // Alterna o menu hamburguer para X
    menuToggle.classList.toggle("active");
    
    if (itens.style.transform === 'translateX(0%)') {
        itens.style.transform = 'translateX(100%)';
    } else {
        itens.style.transform = 'translateX(0%)';
    }
}

//Animação do Footer subindo quando o usuario chegar no final do site
function FtAnimado() {
    const footer = document.querySelector('footer');
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
      footer.style.bottom = '0px'; 
    } else {
      footer.style.bottom = '-120px'; 
    }
  }

window.addEventListener('scroll', FtAnimado);