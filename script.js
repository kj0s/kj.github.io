const floatingThings = document.querySelectorAll(
    ".fabric-label, .floating-patch"
);


document.addEventListener("mousemove", (event) => {

    const mouseX =
        event.clientX / window.innerWidth - 0.5;

    const mouseY =
        event.clientY / window.innerHeight - 0.5;


    floatingThings.forEach((thing, index) => {

        /*
         * Keep the movement extremely subtle.
         * We don't want the website to feel like
         * everything is floating in space.
         */

        const strength =
            thing.classList.contains("fabric-label")
                ? 3
                : 2;


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

const patches = document.querySelectorAll(
    ".floating-patch"
);


document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);


    patches.forEach((patch, index) => {

        const strength =
            index === 0 ? 3 : 2;

        patch.style.setProperty(
            "--mouse-x",
            `${x * strength}px`
        );

        patch.style.setProperty(
            "--mouse-y",
            `${y * strength}px`
        );

    });

});
