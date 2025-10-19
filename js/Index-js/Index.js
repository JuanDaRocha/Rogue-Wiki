ScrollReveal().reveal('#wiki-sobre', {
    origin: 'top',
    distance: '60px',
    duration: 500,
    delay: 200,
    reset: false
});

ScrollReveal().reveal('#Wiki-nav', {
    origin: 'top',
    distance: '60px',
    duration: 700,
    delay: 300,
    reset: false
});


function WorldPortal() {
    const gaiaDivs = document.querySelectorAll("#nav-gaia > div");
    const kheiDivs = document.querySelectorAll("#nav-khei > div");
    const portalButton = document.querySelector(".gaia-btn p"); // seleciona o texto < GAIA >

    const primeiroGaia = gaiaDivs[0];
    const displayGaia = window.getComputedStyle(primeiroGaia).display;

    if (displayGaia === "flex") {
        // Troca para Khei
        gaiaDivs.forEach(div => div.style.opacity = "0");
        setTimeout(() => {
            gaiaDivs.forEach(div => {
                div.style.display = "none";
                div.style.opacity = "1";
            });
            kheiDivs.forEach(div => {
                div.style.display = "flex";
                div.style.opacity = "0";
                setTimeout(() => {
                    div.style.opacity = "1";
                }, 50);
            });

            portalButton.innerHTML = "&lt; KHEI &gt;"; // muda o nome para KHEI
        }, 400);
    } else {
        // Volta para Gaia
        kheiDivs.forEach(div => div.style.opacity = "0");
        setTimeout(() => {
            kheiDivs.forEach(div => {
                div.style.display = "none";
                div.style.opacity = "1";
            });
            gaiaDivs.forEach(div => {
                div.style.display = "flex";
                div.style.opacity = "0";
                setTimeout(() => {
                    div.style.opacity = "1";
                }, 50);
            });

            portalButton.innerHTML = "&lt; GAIA &gt;"; // volta para GAIA
        }, 400);
    }
}


