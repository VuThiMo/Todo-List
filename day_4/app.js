const image = document.querySelectorAll('.image img ');
const left= document.querySelector('.left');
const right=document.querySelector('.right');
const close=document.querySelector('.close');
const gallaryimg=document.querySelector('.gallary_inner img');
const gallary=document.querySelector('.gallary')
// ba đầu để vị trí bằng 0 và khi mk click vào vị chs nào thì nó sẽ hiện ra vị trí đó 
var vitri = 0;
function ShowGallary(){
    if(vitri == 0){
        left.classList.add('hide');  
    }
    else{
        left.classList.remove('hide');
    }
    if(vitri == image.length-1 ){
        right.classList.add('hide');  
    }
    else{
        right.classList.remove('hide');
    }
    //hiển thị 
    gallaryimg.src=image[vitri].src;
    gallary.classList.add('show');
}

image.forEach((item, index)=>{
    item.addEventListener('click',function(){
        vitri=index;
        ShowGallary()
        
    })
})
close.addEventListener('click',function(){
    gallary.classList.remove('show');
})
left.addEventListener('click',function(){
    if(vitri > 0){
        vitri--
        ShowGallary();

    }
})
right.addEventListener('click',function(){
    if(vitri < image.length-1){
        vitri++
        ShowGallary();

    }
})





