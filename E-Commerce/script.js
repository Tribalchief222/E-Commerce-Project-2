//let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
//let close = document.getElementById('close');
let header = document.getElementById('header');
//if(bar){
//    bar.addEventListener('click', () =>{
//        nav.classList.add('active');
//    })
//}
//
//if(close){
//    close.addEventListener('click', () =>{
//        nav.classList.remove('active');
//    })
//}

header.addEventListener('click', () =>{
    nav.classList.toggle('active');
});