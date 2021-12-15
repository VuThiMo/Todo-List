var database=[];
const input= document.querySelector('.input');
const btn= document.querySelector('.btn');
const item= document.querySelector('.item');
const InputCheck= document.querySelector('.input-check')
const TodoList=document.querySelector('.todo-list')
function render(){
    // clear
    TodoList.innerHTML='';
    for( let i= 0; i< database.length; i++){
        var todo= database[i];
        const TodoItem= document.createElement('div');
        TodoItem.classList.add('item')
        var checkbox= document.createElement('input');
        checkbox.type='checkbox';
        checkbox.id='check';
        const TodoContent= document.createElement('div');
        TodoContent.classList.add('content');
        TodoContent.innerHTML=todo.value;

        TodoItem.append(checkbox);
        TodoItem.append(TodoContent);
        TodoList.append(TodoItem);

        const btnDelete = document.createElement('button');
        btnDelete.innerHTML='X';
        btnDelete.classList.add('delete')
        btnDelete.addEventListener('click',()=>{
            deleteTudo(i);
        })
        TodoItem.append(btnDelete);
        TodoList.append(TodoItem);
    }
}
btn.addEventListener('click',()=>{
    //lấy giá trị input ra 
    let value = input.value;
    const item={
        value:value,
        id:database.length
    }
    database.push(item);
    render();
})
function deleteTudo(i){
    database.splice(i,1);
    TodoList.innerHTML=database;
render();
}
//Tạo sự kiện enter cho input
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     btn.click();
    }
})

