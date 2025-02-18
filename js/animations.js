// Hero Title Animation
gsap.to(".title", {
    opacity: 1,
    y: -20,
    duration: 1.5,
    ease: "power2.out"
});

// Scroll-triggered Text Animation
gsap.from(".fade-in", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".fade-in",
        start: "top 75%",
        toggleActions: "play none none reverse",
    }
});

// Character Reveal
gsap.from(".character", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
        trigger: ".character",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});
