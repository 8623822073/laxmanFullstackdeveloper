const humberger =document.getElementById("humberger");
const navinks =document.getElementById("navlink");
const blue_horizon=document.getElementById("blue-horion")

humberger.addEventListener("click",()=>
{
navinks.classList.toggle("navlink-active");

})
function discover(){
    window.open("arrivals.html");
}
function mainpage()
{
    window.open("index.html");
}
function cart()
{
    window.open("cart.html")
}
const toggleBtn = document.getElementById('toggleBtn');

// Set an event listener for click events
toggleBtn.addEventListener('click', function() {
  // Toggle between "ON" and "OFF" states
  if (document.body.style.backgroundColor==='rgb(209, 209, 224)') {
    document.body.style.backgroundColor='white'//set light mode color
    toggleBtn.style.backgroundColor='grey'//set button color for light mode
  } else {
    document.body.style.backgroundColor='rgb(209, 209, 224)'//set dark mode color
    toggleBtn.style.backgroundColor='lightgreen'//set button color for dark mode
  }
  if(document.body.style.imageRendering.backgroundColor==='white'){
    document.body.style.imageRendering.backgroundColor='grey'
  }

  // Toggle the 'active' class to trigger the slide-in animation
  toggleBtn.classList.toggle('active');
});
