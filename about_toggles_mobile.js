function toggleMV(header) {
    if (window.innerWidth > 768) return;

        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            header.classList.remove("active");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            header.classList.add("active");
        }
    }

document.querySelectorAll(".mv-head").forEach(head => {
        head.addEventListener("click", function () {
            toggleMV(this);
            });
        });
