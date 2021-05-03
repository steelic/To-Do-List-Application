let toDoList = getSavedTodos()

const filter = 
{
    searchText: ''
}

const hideFilter =
{
    completion: false
}

renderToDoList(toDoList,filter)

document.querySelector('#search-text').addEventListener('input', function (e)
{
    filter.searchText = e.target.value
    renderToDoList(toDoList, filter)
})

document.querySelector("#todo-form").addEventListener('submit', function (e)
{
    e.preventDefault()
    toDoList.push(
        {
            title: e.target.elements.createToDo.value,
            completion: false
        }
    )
    saveTodos()
    renderToDoList(toDoList, filter)
    e.target.elements.createToDo.value = ''
})

document.querySelector('#remove-all-todo').addEventListener('click', function(e)
{
    localStorage.clear()
    document.querySelector('#toDoList').innerHTML =  ''
    document.querySelector('#incompleteTodos').innerHTML =  ''
})
