// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imgs = entry.target.querySelectorAll('img');
            imgs.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add('show');
                }, index * 100);
            });
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.project-images').forEach(section => {
    observer.observe(section);
});


// MODAL FUNCTION
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-images img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";
