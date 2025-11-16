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