const database =[];
const btn = document.getElementById('add-button');
const input= document.querySelector('.input-form');


function render(){
    //clear 
    const todoList= document.querySelector('.todoList')
    todoList.innerHTML='';
    
    for(let i=0; i< database.length; i++){
        var todo= database[i];
        const toduElememnt  = document.createElement('div');
        toduElememnt.innerHTML=todo.value;

        const btnDelete= document.createElement('button')
        btnDelete.classList.add('delete');
        btnDelete.innerHTML='xoa';
        btnDelete.addEventListener('click',()=>{
            deleteTudo(i);
        })
        toduElememnt.append(btnDelete)

        const element = document.querySelector('.todoList');
        element.append(toduElememnt);

        // Element.setAttribute('contenteditable','true');
        const btnAdd= document.createElement('button');
        btnAdd.classList.add('edit');
        btnAdd.innerHTML='edit';
        btnAdd.addEventListener('click',()=>{
            editTodo(id);
        })
        toduElememnt.append(btnAdd)

    }
}

btn.addEventListener('click',()=>{

    //lấy giá trị input ra 
    let value= input.value;
    const iteam ={
        value: value,
        id: database.length
    }
    //thêm  giá trị object vào trong database 
    database.push(iteam);
    //call hàm render để hiển thị ra màn hình 
    render();
})
input.addEventListener('change',()=>{
    let value= input.value;
    const iteam ={
        value: value,
        id: database.length
    }
    //thêm  giá trị object vào trong database 
    database.push(iteam);
    //call hàm render để hiển thị ra màn hình 
    render();

})

function deleteTudo(i){
    database.splice(i,1);
    document.querySelector('.todoList').innerHTML=database;
render();
}

function editTodo(id){
    for(let i= 0; i< database.length ; i++){
       
    }
    render();
}
