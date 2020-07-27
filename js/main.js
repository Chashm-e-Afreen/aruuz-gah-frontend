
  
 $('#inputText').setUrduInput({urduNumerals: true}); //sets the layout to Urdu

function toggleSidebar() {
  $('.ui.sidebar').sidebar('setting','dimPage',false)
  .sidebar('toggle');
;
}

function showModal() {
  $('.ui.basic.modal')
  .modal()
  .modal('show');
}

function showAmbitionsModal() {
  $('.ui.modal.ambitions')
  .modal()
  .modal('show')
;
}

function ghalibBahoor() {
  document.body.className += " animate__animated animate__slideOutUp";
  window.location.href = "ghalibExamples.html"
}

function getResponse()
{
  
  const newLocal = document.getElementById("inputText").value;
  var input = newLocal;

  if (input != " ") { 
  fetchResponse(input);
  }
    
}


function newFunction() {
  return "islahButton";
  
}

async function fetchResponse(input) {
  
  const requestOptions = {method: 'POST',   headers: {
    'Content-Type': 'application/json;charset=UTF-8'},
     body: input};

   
     let response =  await fetch('https://aruuz.rocks:3000/words', requestOptions);
     let responseText = await response.text();
     //split the newline delimited JSON
     let res = responseText.split("\n");
   
         words = JSON.parse(res[0]);
         closestScansion =  JSON.parse(res[1]);
         islah =  JSON.parse(res[2]);
         closestMeters =  JSON.parse(res[3]);
         closestMeterNames =  JSON.parse(res[4]);
         problematicWords =  JSON.parse(res[5]);
         ravaniScore =  JSON.parse(res[6]);
         localStorage.setItem('words',JSON.stringify(words));
         localStorage.setItem('scansion',JSON.stringify(closestScansion));
         localStorage.setItem('islah',JSON.stringify(islah));
         localStorage.setItem('meters',JSON.stringify(closestMeters));
         localStorage.setItem('names',JSON.stringify(closestMeterNames));
         localStorage.setItem('prob',JSON.stringify(problematicWords));
         localStorage.setItem('ravani',JSON.stringify(ravaniScore));

         document.body.className += " animate__animated animate__slideOutRight animate__fast";
         window.location.href = "output-page.html";         
}

document.getElementById("islahButton").addEventListener("click",getResponse);
document.getElementById("burgerMenu").addEventListener("click",toggleSidebar)
document.getElementById("keyboardLayout").addEventListener("click",showModal)
document.getElementById("ambition").addEventListener("click",showAmbitionsModal)
document.getElementById("ghalibExamples").addEventListener("click", ghalibBahoor)

