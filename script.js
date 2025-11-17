function breakTheText() {
    let h1 = document.querySelector("#name")
    let h1Text = h1.textContent;

    let splittedText = h1Text.split('')

    let clutter = ""

    splittedText.forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })

    h1.innerHTML = clutter
}

breakTheText();

gsap.from("h1 span", {
    y: 50,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
})

/* ------------------------------------------------------- */
window.addEventListener("wheel", (xyz) => {
    if (xyz.deltaY > 0) {
        // console.log("Scroll Down");
        gsap.to(".marque", {
            transform: 'translateX(-200%)',
            delay: 1,
            duration: 4,
            repeat: -1,
            ease: "none"
        })

        gsap.to(".marque img", {
            rotate: 180,
        })

    } else {
        // console.log("Scroll Up");
        gsap.to(".marque", {
            transform: 'translateX(0%)',
            delay: 1,
            duration: 4,
            repeat: -1,
            ease: "none"
        })

        gsap.to(".marque img", {
            rotate: 0,
        })
    }
})

