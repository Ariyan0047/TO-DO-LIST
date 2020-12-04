const addItemTask = document.querySelector(".taskListForm")
const userInput = document.querySelector("#userInput")
const lists = document.querySelector(".toDoList")
const popUp = document.querySelector(".popUp")
const search = document.querySelector("#searchList")
const deleteBtn = document.querySelector(".delete")
const cancelBtn = document.querySelector(".cancel")

const generateTemplate = (todo) => {
    const generateHtml = `<li class="toDoListItem">${todo}</li>`
    lists.innerHTML += generateHtml
}

addItemTask.addEventListener("submit", (event) => {
    event.preventDefault()
    const toDo = userInput.value.trim()
    if (toDo.length > 0) {
        generateTemplate(toDo)
    }
    addItemTask.reset()
})

lists.addEventListener("click", event => {
    event.preventDefault()
    if (event.target.classList.contains("toDoListItem")) {
        popUp.style.display = "block"

        deleteBtn.addEventListener("click", () => {
            event.target.remove()
            popUp.style.display = "none"
        })

        cancelBtn.addEventListener("click", () => {
            popUp.style.display = "none"
        })
    }
})

const filteredListItems = (searchItem) => {
    Array.from(lists.children).filter(item => {
        return !item.textContent.toLowerCase().includes(searchItem)
    }).forEach((item) => {
        item.classList.add("filtered")
    })


    Array.from(lists.children).filter(item => {
        return item.textContent.toLowerCase().includes(searchItem)
    }).forEach((item) => {
        item.classList.remove("filtered")
    })

}

search.addEventListener("keyup", event => {
    const searchItem = search.value.trim()
    filteredListItems(searchItem)
})