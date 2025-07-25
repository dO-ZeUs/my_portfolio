/* ANIMATION SCROOL REVEAL */

const animation = ScrollReveal( {
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
});

animation.reveal(".home_img");
animation.reveal(".home_content", {origin: "bottom"});

animation.reveal(".skill_title", {origin: "top"});
animation.reveal(".skill_card", {origin: "left", interval: 300});

animation.reveal(".projects_title", {origin: "top"});
animation.reveal(".projects_card", {origin: "right", interval: 300});

animation.reveal(".contact_form", {origin: "left"});
animation.reveal(".contacts_info", {origin: "right", interval: 300});




