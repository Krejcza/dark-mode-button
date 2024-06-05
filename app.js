const body = document.querySelector('body')
const toggle = document.querySelector('.toggle')

let getMode = localStorage.getItem('mode')
if(getMode && getMode === 'dark'){
   body.classList.add('dark')
   toggle.classList.add('active')
}

toggle.addEventListener('click', function(){
   toggle.classList.toggle('active')
})

toggle.addEventListener('click',function(){
   body.classList.toggle('dark')

   if(!body.classList.contains('dark')){
      return localStorage.setItem('mode', 'light')
   } localStorage.setItem('mode', 'dark')
})

