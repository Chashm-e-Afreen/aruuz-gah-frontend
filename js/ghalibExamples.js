function toggleSidebar() {
    $('.ui.sidebar')
    .sidebar('toggle')
  ;
  }
  

  document.getElementById("burgerMenu").addEventListener("click",toggleSidebar)
  document.getElementById("homeButton").addEventListener("click", ()=>{  document.body.className += " animate__animated animate__slideOutDown"; window.location.href = "index.html" })