/* loader */
window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.getElementById("loader").classList.add("hide")
  },900)
})

/* reveal */
function reveal(){
  document.querySelectorAll('.reveal').forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add('active')
    }
  })
}
window.addEventListener('scroll',reveal)
window.addEventListener('load',reveal)

/* typing */
const text="Computer Science Student | Studying to be a Web Developer"
let i=0
function type(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(i)
    i++
    setTimeout(type,60)
  }
}
window.addEventListener("load",type)

/* theme */
function toggleTheme(){
  document.body.classList.toggle("light")
}
