const container = document.getElementById("projectsScroll")

container.addEventListener("wheel", (evt) => {

evt.preventDefault()

container.scrollLeft += evt.deltaY

})

document.getElementById("scrollLeft").onclick = () => {
container.scrollLeft -= 300
}

document.getElementById("scrollRight").onclick = () => {
container.scrollLeft += 300
}