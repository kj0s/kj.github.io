const embroidery = document.querySelector(".embroidery-main");

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);

    embroidery.style.transform =
        `translate(${x * 12}px, ${y * 12}px) rotate(4deg)`;

});

const floatingThings = document.querySelectorAll(
    ".embroidery-main, .fabric-label"
);

document.addEventListener("mousemove", (event) => {

    const mouseX =
        event.clientX / window.innerWidth - 0.5;

    const mouseY =
        event.clientY / window.innerHeight - 0.5;


    floatingThings.forEach((thing, index) => {

        const strength =
            index === 0 ? 8 : 3;

        const x =
            mouseX * strength;

        const y =
            mouseY * strength;


        thing.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        thing.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

});
