var perfEntries = performance.getEntriesByType("navigation"); //reloads if back button is pressed

if (perfEntries[0].type === "back_forward") {
    location.reload(true);
}

function toggleSidebar() {
    $('.ui.sidebar')
    .sidebar('toggle')
  ;
  }
  

  document.getElementById("burgerMenu").addEventListener("click",toggleSidebar)
  document.getElementById("homeButton").addEventListener("click", ()=>{  document.body.className += " animate__animated animate__slideOutDown"; window.location.href = "index.html" })