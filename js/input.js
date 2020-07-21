

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
  

 await Promise.all([ 
        fetch('http://localhost:3000/words', {method: 'POST',   headers: {
            'Content-Type': 'application/json;charset=UTF-8'},
             body: input}),
         fetch('http://localhost:3000/closestScansion', {method: 'POST',   headers: {
          'Content-Type': 'application/json;charset=UTF-8'},
           body: input}),
        fetch('http://localhost:3000/closestMeterKeys', {method: 'POST',   headers: {
          'Content-Type': 'application/json;charset=UTF-8'},
           body: input}),
        fetch('http://localhost:3000/closestMeters', {method: 'POST',   headers: {
          'Content-Type': 'application/json;charset=UTF-8'},
           body: input}),
        fetch('http://localhost:3000/closestMeterNames', {method: 'POST',   headers: {
          'Content-Type': 'application/json;charset=UTF-8'},
           body: input}),
        fetch('http://localhost:3000/problematicWords', {method: 'POST',   headers: {
          'Content-Type': 'application/json;charset=UTF-8'},
           body: input})
      ])
      .then(async([res1, res2, res3, res4, res5, res6]) => {
        const words = await res1.json();
        const closestScansion = await res2.json();
        const closestMeterKeys = await res3.json();
        const closestMeters = await res4.json();
        const closestMeterNames = await res5.json();
        const problematicWords = await res6.json();
    
          localStorage.setItem('words',JSON.stringify(words));
          localStorage.setItem('scansion',JSON.stringify(closestScansion));
          localStorage.setItem('keys',JSON.stringify(closestMeterKeys));
          localStorage.setItem('meters',JSON.stringify(closestMeters));
          localStorage.setItem('names',JSON.stringify(closestMeterNames));
          localStorage.setItem('prob',JSON.stringify(problematicWords));
    
          document.body.className += " animate__animated animate__slideOutRight animate__fast";
          window.location.href = "http://127.0.0.1:5500/output-page.html";
        
      });
     
    
}

document.getElementById("islahButton").addEventListener("click",getResponse);



