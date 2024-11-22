document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    let isDragging = false;
    let startX, scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => (isDragging = false));
    slider.addEventListener("mouseup", () => (isDragging = false));
    slider.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const move = x - startX;
        slider.scrollLeft = scrollLeft - move;
    });

    // Auto-scroll
    let autoScroll = setInterval(() => {
        slider.scrollLeft += 2;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
        }
    }, 30);

    slider.addEventListener("mouseover", () => clearInterval(autoScroll));
    slider.addEventListener("mouseout", () => {
        autoScroll = setInterval(() => {
            slider.scrollLeft += 2;
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollLeft = 0;
            }
        }, 30);
    });
});
