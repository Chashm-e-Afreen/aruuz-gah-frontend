
  
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

        let res1 = await fetch('http://161.35.72.255/:3000/words', requestOptions);
        words = await res1.json();
        let res2 = await fetch('http://161.35.72.255/:3000/closestScansion', requestOptions);
        closestScansion = await res2.json();
        let res3 = await fetch('http://161.35.72.255/:3000/islah', requestOptions);
        closestMeterKeys = await res3.json();
        let res4 = await fetch('http://161.35.72.255/:3000/closestMeters', requestOptions);
        closestMeters = await res4.json();
        let res5 = await fetch('http://161.35.72.255/:3000/closestMeterNames', requestOptions);
        closestMeterNames = await res5.json();
        let res6 = await fetch('http://161.35.72.255/:3000/problematicWords', requestOptions);
        problematicWords = await res6.json();
        let res7 = await fetch('http://161.35.72.255/:3000/ravani');
        ravaniScore = await res7.json();
    
          localStorage.setItem('words',JSON.stringify(words));
          localStorage.setItem('scansion',JSON.stringify(closestScansion));
          localStorage.setItem('islah',JSON.stringify(closestMeterKeys));
          localStorage.setItem('meters',JSON.stringify(closestMeters));
          localStorage.setItem('names',JSON.stringify(closestMeterNames));
          localStorage.setItem('prob',JSON.stringify(problematicWords));
          localStorage.setItem('ravani',JSON.stringify(ravaniScore));

          document.body.className += " animate__animated animate__slideOutRight animate__fast";
          window.location.href = "http://127.0.0.1:5500/output-page.html";
}

document.getElementById("islahButton").addEventListener("click",getResponse);
document.getElementById("burgerMenu").addEventListener("click",toggleSidebar)
document.getElementById("keyboardLayout").addEventListener("click",showModal)
document.getElementById("ambition").addEventListener("click",showAmbitionsModal)
document.getElementById("ghalibExamples").addEventListener("click", ghalibBahoor)

