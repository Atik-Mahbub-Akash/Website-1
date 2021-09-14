/* ---------------------------------small screen button--------------------- */

const navLinks = document.querySelector('#navLinks');

function showBtn(){
    navLinks.style.right ="0"
}
function closeBtn(){
    navLinks.style.right ="-200px"
}

/* ---------------------------sticky navbar-------------------- */
const nav = document.querySelector('nav');
window.addEventListener('scroll', ()=>{
    nav.classList.toggle('sticky', pageYOffset > 100)
})

/* -----------------------------scroll up button-------------------- */
const toDo = document.querySelector('.todo');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100){
        toDo.classList.add('active')
    }
    else{
        toDo.classList.remove('active') 
    }
})
/* --------------------------blog page read more button-------------------- */
const readMore = document.querySelector('.read-more-btn');

const text = document.querySelector('.text');

readMore.addEventListener('click',()=>{
    text.classList.toggle('show-more')
    if(readMore.innerHTML ==='Read More'){
        readMore.innerHTML = 'Read Less'
    }
    else{
        readMore.innerHTML = 'Read More'
    }
})

/* ----------------------------home page read more button----------------------- */
