const scrollRevealOption = {

    distance: "60px", 
    origin: "bottom", 
    duration: 1000, 
};
   

ScrollReveal().reveal(".home-content h1", {
    ...scrollRevealOption, 
    delay: 500, 
});

ScrollReveal().reveal(".home-content h3", {
    ...scrollRevealOption,
    origin: "right",
    delay: 700, 

});


ScrollReveal().reveal(".home-content p", {
    ...scrollRevealOption,
    origin: "right",
    delay: 900, 

});




// btn-home

ScrollReveal().reveal(".btn-box", {
    ...scrollRevealOption, 
    delay: 800, 
    origin: "left",
});


// btn-sci


ScrollReveal().reveal(".home-sci", {
    ...scrollRevealOption, 
    delay: 900, 
    origin: "left",
});


// Section about


ScrollReveal().reveal(".img", {
    ...scrollRevealOption, 
    delay: 500, 
});
 

// Text


ScrollReveal().reveal(".text", {
    ...scrollRevealOption, 
    origin: "right",
    delay: 900, 
});


// btn-about

ScrollReveal().reveal(".text .btn-aboutt", {
    ...scrollRevealOption, 
    origin: "right",
    delay: 1000, 
});

