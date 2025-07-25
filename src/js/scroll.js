/* SCRROLL ET CHANGEMENT DU LIEN ACTIF */

const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");

        if (item.href.includes(current)) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", activeLink);
