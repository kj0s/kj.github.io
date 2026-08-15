const embroidery = document.querySelector(".embroidery-main");

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);

    embroidery.style.transform =
        `translate(${x * 12}px, ${y * 12}px) rotate(4deg)`;

});
