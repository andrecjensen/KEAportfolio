window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden er loadet. Velkommen!");

    document.querySelector(".portfolioknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Portfolio menu vises");

    document.querySelector("#pfmenu").classList.toggle("hidden");
}
