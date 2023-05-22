const menuBtn = document.querySelector('.navBtn5')
const nav = document.querySelector('nav')

menuBtn.addEventListener('click', ()=>{
    nav.classList.toggle('show')
    menuBtn.classList.toggle('is-open')
})