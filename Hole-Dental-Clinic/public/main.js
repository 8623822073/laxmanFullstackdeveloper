const hamburger = document.getElementById("ham");
const navlinks=document.getElementById("navli");

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("navlinks-active");
})