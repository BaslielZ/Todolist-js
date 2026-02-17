num = 1
todolist = JSON.parse(localStorage.getItem("todos")) || []
console.log(todolist)
renderList()

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todolist))
    console.log('saved')
    console.log(todolist)
}

function crossoff(id){
    item = document.getElementById(id)
    if (item != null){
        if (!item.style.textDecoration || item.style.textDecoration == null){
            item.style.textDecoration = "line-through"
            console.log("crossedoff")
        }
        else{
            item.style.textDecoration = null
            console.log("uncross")
        }
        
    }
    
}

button = document.getElementById('addItem').addEventListener('click', addItem)


function addItem() {
    item = document.getElementById('newItem').value
    if (item != ""){
        if (document.getElementById('high').checked == true){
            obj = {text: item, priority: 'high'}
            todolist.push(obj)
        }
        else if (document.getElementById('mid').checked == true) {
            obj = {text: item, priority: 'mid'}
            todolist.push(obj)
        }
        else{
            obj = {text: item, priority: 'low'}
            todolist.push(obj)
        }

        saveTodos()
        renderList()
        document.getElementById('high').checked = false
        document.getElementById('mid').checked = false
        document.getElementById('low').checked = false
    }
    
}

function renderList(){
    document.getElementById('list').innerHTML = ""
    for (i=0; i<todolist.length;i++){
        if (todolist[i].priority == 'high'){
            document.getElementById('list').innerHTML += ` <li class="${todolist[i].priority}" id="item${num++}" onclick="crossoff('item${num-1}')">${todolist[i].text} <button class="delete-btn" onclick="removeItem('${todolist[i].text}')">delete</button></li>`
        }
    }
    for (i=0; i<todolist.length;i++){
        if (todolist[i].priority == 'mid'){
            document.getElementById('list').innerHTML += ` <li class="${todolist[i].priority}" id="item${num++}" onclick="crossoff('item${num-1}')">${todolist[i].text} <button class="delete-btn" onclick="removeItem('${todolist[i].text}')">delete</button></li>`
        }
    }
    for (i=0; i<todolist.length;i++){
        if (todolist[i].priority == 'low'){
            document.getElementById('list').innerHTML += ` <li class="${todolist[i].priority}" id="item${num++}" onclick="crossoff('item${num-1}')">${todolist[i].text} <button class="delete-btn" onclick="removeItem('${todolist[i].text}')">delete</button></li>`
        }
    }
}

function removeItem(todo) {
  todolist = todolist.filter(item => item.text !== todo);
  console.log(todolist)
  saveTodos()
  renderList()
}
