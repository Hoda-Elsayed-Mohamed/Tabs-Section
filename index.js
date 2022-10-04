const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const para1 = document.querySelector('.p1');
const para2 = document.querySelector('.p2');
const para3 = document.querySelector('.p3');


 newWindow();

function newWindow(){
       
    btn1.classList.remove('blue');
    btn2.classList.add('blue');
    btn3.classList.add('blue');

    para1.classList.remove('disappear');
    para2.classList.add('disappear');
    para3.classList.add('disappear');
 
}

btn1.addEventListener('click', newWindow)

btn2.addEventListener('click', ()=>{
    btn1.classList.add('blue');
    btn2.classList.remove('blue');
    btn3.classList.add('blue');
    para1.classList.add('disappear');
    para2.classList.remove('disappear');
    para3.classList.add('disappear');
 

})

btn3.addEventListener('click', ()=>{
    btn1.classList.add('blue');
    btn2.classList.add('blue');
    btn3.classList.remove('blue');
    para1.classList.add('disappear');
    para2.classList.add('disappear');
    para3.classList.remove('disappear');
})