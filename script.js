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

num = 5
function addItem() {
    item = document.getElementById('newItem').value
    document.getElementById('list').innerHTML += ` <li class="normal" id="item${num++}" onclick="crossoff('item${num-1}')">${item} <button onclick="removeItem('item${num-1}')">delete</button></li>`
}


function removeItem(id) {
    document.getElementById('list').removeChild(document.getElementById(id))
}
