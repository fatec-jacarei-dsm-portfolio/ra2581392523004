
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            document.querySelectorAll(".reveal").forEach(el => {
                if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                    el.classList.add("active");
                }
            });
            ticking = false;
        });
        ticking = true;
    }
});