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

num = 1
todolist = []
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
            document.getElementById('list').innerHTML += ` <li class="${todolist[i].priority}" id="item${num++}" onclick="crossoff('item${num-1}')">${todolist[i].text} <button onclick="removeItem('item${num-1}')">delete</button></li>`
        }
    }
    for (i=0; i<todolist.length;i++){
        if (todolist[i].priority == 'mid'){
            document.getElementById('list').innerHTML += ` <li class="${todolist[i].priority}" id="item${num++}" onclick="crossoff('item${num-1}')">${todolist[i].text} <button onclick="removeItem('item${num-1}')">delete</button></li>`
        }
    }
    for (i=0; i<todolist.length;i++){
        if (todolist[i].priority == 'low'){
            document.getElementById('list').innerHTML += ` <li class="${todolist[i].priority}" id="item${num++}" onclick="crossoff('item${num-1}')">${todolist[i].text} <button onclick="removeItem('item${num-1}')">delete</button></li>`
        }
    }
}
    



function removeItem(id) {
    document.getElementById('list').removeChild(document.getElementById(id))
}
