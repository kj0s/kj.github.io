const pieces = document.querySelectorAll(".embroidery");

document.addEventListener("mousemove", (event) => {

    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    pieces.forEach((piece, index) => {

        const movement = (index + 1) * 8;

        piece.style.transform =
            `translate(${x * movement}px, ${y * movement}px)
             rotate(${index === 0 ? 8 : -12}deg)`;

    });

});
