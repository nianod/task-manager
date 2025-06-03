const form = document.querySelector('form')
const taskInput = document.getElementById("teskentry")
const taskList = document.querySelector(".task-list")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const realTask = taskInput.value.trim()

    if(realTask) {
        const newTask = document.createElement("li")
        newTask.innerHTML = `
            <input type="checkbox" />
            <span class="task-text">${realTask} </span>
            <div class="actions">
            <button class="complete-btn" title="Mark as Complete">✓</button>
            <button class="delete-btn" title="Delete Task">✖</button>
            </div>
        `
        taskList.appendChild(newTask)


        taskInput.value = "";
    }

   
})

taskList.addEventListener("click", (e) => {
    const li = e.target.closest("li")

    if(e.target.classList.contains('delete-btn')) {
        li.remove()
    } else if(e.target.classList.contains('complete-btn' || e.target.type === 'checkbox')) {
        li.classList.toggle('completed')
        
    }
})
 