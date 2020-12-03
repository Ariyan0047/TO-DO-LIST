const addItemTask = document.querySelector(".taskListForm")
const userInput = document.querySelector("#userInput")
const lists = document.querySelector(".toDoList")

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