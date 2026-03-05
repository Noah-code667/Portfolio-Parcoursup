const container = document.getElementById("projectsScroll")
const cards = document.querySelectorAll(".project-card")
let index = 0

function updateCenterCard() {

    const cardWidth = cards[0].offsetWidth + 20
    container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
    })

    cards.forEach((card, i) => {

        if (i === index) {
            card.classList.add("active")
        } 
        else {
            card.classList.remove("active")
        }

    })

}

container.addEventListener("wheel", (evt) => {

    evt.preventDefault()

    if (evt.deltaY > 0) {

        if (index < cards.length - 1) {
            index++
        }

    } 
    else {

        if (index > 0) {
            index--
        }

    }

    updateCenterCard()

})

document.getElementById("scrollLeft").onclick = () => {

    if (index > 0) {
        index--
    }

    updateCenterCard()

}

document.getElementById("scrollRight").onclick = () => {

    if (index < cards.length - 1) {
        index++
    }

    updateCenterCard()

}

updateCenterCard()