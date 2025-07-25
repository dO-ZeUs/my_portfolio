/* INCLURE LES FICHIERS HEADER ET FOOTER DANS TOUTES LES PAGES */

function includeHTML(callback) {
    // SELECTIONNER TOUS LES ELEMENTS
    const include = document.querySelectorAll('[data-include]');
    let remaining = include.length;

    include.forEach (async (e) => {
        // RECUPERER LA VALEUR DE L'ATTRIBUT
        const file = e.getAttribute ('data-include');

        try {
            // UTILISER 'fetch' POUR CHARGER LE CONTENU HTML DU FICHIER
            const response = await fetch(file);

            //SI LA REPONSE EST OK
            if (response.ok) {
                e.innerHTML = await response.text();
            } else {
                e.innerHTML = `<p style = "color:red;">Erreur: fichier ${file} introuvable</p>`
            }
        } catch (error) {
                e.innerHTML = `<p style = "color:red;">Erreur de chargement ${error}</p>`
        } finally {
            remaining--
            if (remaining === 0 && typeof callback === 'function') {
                callback();
            }
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    includeHTML (() => {
        /* GESTION DE LA RESPONSIVITE AVEC L'AFFICHAGE DU MENU */

        const navMenu = document.getElementById("nav-menu");
        const navLink = document.querySelectorAll(".nav-link");
        const hamburger = document.getElementById("hamburger");

        if (hamburger && navMenu && navLink.length > 0) {
            hamburger.addEventListener("click", () => {
                navMenu.classList.toggle("left-[0]")
                hamburger.classList.toggle('ri-close-large-line')
            });

            navLink.forEach(link => {
                link.addEventListener("click", () => {
                    navMenu.classList.toggle("left-[0]")
                    hamburger.classList.toggle('ri-close-large-line')
                });
            });
        }
    });
});


