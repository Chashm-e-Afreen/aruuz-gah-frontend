
   
    function toggleSidebar() {
        $('.ui.sidebar')
        .sidebar('toggle')
      ;
      }
      
      function showModal() {
        $('.ui.basic.modal')
        .modal('show')
      ;
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
    
    document.getElementById("ghalibExamples").addEventListener("click", ghalibBahoor)
    document.getElementById("burgerMenu").addEventListener("click",toggleSidebar)
    document.getElementById("ambition").addEventListener("click",showAmbitionsModal)
    window.onload = function() {

        
    var outputTable =  document.getElementById('outputTable');
    const words = JSON.parse(localStorage.getItem('words'));
    const scansion = JSON.parse(localStorage.getItem('scansion'));
    const meters = JSON.parse(localStorage.getItem('meters'));
    const islah = JSON.parse(localStorage.getItem('islah'));
    const names = JSON.parse(localStorage.getItem('names'));
    const problematicWords = JSON.parse(localStorage.getItem('prob'));
    const ravani = JSON.parse(localStorage.getItem('ravani'));
        
    if (words.length && scansion.length && meters.length &&
        names.length && islah.length && problematicWords.length) {
    for (let i =0 ; i<words.length; ++i) {
        var body1 = document.createElement("tbody");

        var behrName = this.document.createElement("div");
        behrName.className = "ui label";
        behrName.innerText = "بحر";
        behrName.style.cssText = "font: 17px Mehr; width: 6em; height: 2.5em ; text-align: center; background-color: #f5f5f5  ; color: #1a1a1a";
        body1.appendChild(behrName)

        var behr = document.createElement("tr");

        behr.style.cssText =  "padding: auto auto"
        var cellBehr = document.createElement("td");
        cellBehr.style.cssText = "color: #0f2862 ; font: 20px Mehr; text-align: right; vertical-align: top; display: block; width: max-content";
        cellBehr.innerText = names[i];
        behr.appendChild(cellBehr);
        body1.appendChild(behr);
        

        var afaeelTag = this.document.createElement("div");
        afaeelTag.className = "ui label";
        afaeelTag.innerText = "افاعیل";
        afaeelTag.style.cssText = "font: 17px Mehr; width: 6em; height: 2.5em ; text-align: center; background-color: #f5f5f5  ; color: #1a1a1a";
        body1.appendChild(afaeelTag)
       

        var afaeel = document.createElement("tr");
        afaeel.style.cssText = "padding-top: 10px; color: #ad1457; font: 20px Mehr; text-align: right; display: block; width: max-content";
        afaeel.innerText = meters[i];
        body1.appendChild(afaeel);

        var wordRow = document.createElement("tr");
        wordRow.style.cssText = "vertical-align:"
        
        for (let j = 0; j<words[i].length; ++j) {
            var word = document.createElement("td");
            var link = document.createElement("a");
            link.innerText = words[i][j];
            link.target ="_blank";
            link.style.cursor = "pointer";
            link.href = "http://udb.gov.pk/result.php?search=" + words[i][j];
            if (problematicWords[i][j] == false) {
                link.style.cssText = "color: #1f6521; text-align: right; font: 20px Mehr"
            } else {
                link.style.cssText = "color: #e2352e; text-align: right; font: 16px Mehr"
            }
           
            word.appendChild(link);
            wordRow.appendChild(word);
        }

        body1.appendChild(wordRow);
        var scansionRow = document.createElement("tr");
  
        
        var taqtiLabel = this.document.createElement("div");
        taqtiLabel.className = "ui label";
        taqtiLabel.innerText = "تقطیع";
        taqtiLabel.style.cssText = "font: 17px Mehr; width: 6em; height: 2.5em ; text-align: center; background-color: #f5f5f5  ; color: #1a1a1a";
        body1.appendChild(taqtiLabel)
  
        for (let j = 0; j<scansion[i].length; ++j) {
     
            var scansionCell = document .createElement("td");
            if (problematicWords[i][j] == false) {
                scansionCell.style.cssText = "color: teal; text-align: right; font: 28px Mehr; "
            } else {
                scansionCell.style.cssText = "color: #e2352e; text-align: right; font: 28px Mehr; "
            }
            if (!scansion[i][j].startsWith("تمام")) {
                if (words[i][j] == "و") {
                    scansionRow.cells[scansionRow.cells.length - 1].innerText = "۱" + scansionRow.cells[scansionRow.cells.length - 1].innerText  //displays proper vao weights
                    temp = scansion[i][j].substring(1);
                    scansionCell.innerText = temp;
                } else {
                scansionCell.innerText += scansion[i][j].split('').reverse().join('');;
                }
            // scansionCell.innerText = scansion[i][j].split('').reverse().join('');
            } else {
                scansionCell.style.cssText = "color: #e2352e; font: 20px Mehr; display: block ruby";
                scansionCell.innerText = scansion[i][j];
            }
            scansionRow.appendChild(scansionCell);
        }
        body1.appendChild(scansionRow)

        var keyRow = document.createElement("tr");

        var islahLabel = this.document.createElement("div");
        islahLabel.className = "ui label";
        islahLabel.innerText = "اصلاح";
        islahLabel.style.cssText = "font: 17px Mehr; width: 6em; height: 2.5em ; text-align: center; background-color: #f5f5f5  ; color: #1a1a1a";
        body1.appendChild(islahLabel)

        
        
        if(!islah[i][0].startsWith("ان")) {
            for (let j =0; j< islah[i].length; ++j) {
                var keyCell = this.document.createElement("td");
            
                    if (words[i][j] == "و") {
                        keyRow.cells[keyRow.cells.length - 1].innerText = "۱" +  keyRow.cells[keyRow.cells.length - 1].innerText  //displays proper vao weights
                        temp = islah[i][j].substring(1);
                        keyCell.innerText = temp;
                        
                    } else {
                    keyCell.innerText += islah[i][j];
                    }
             
                keyCell.style.cssText = "color: #1d1d2c; text-align: right; font: 28px Mehr";
                    
                keyCell.innerText = keyCell.innerText.split('').reverse().join('');
                keyRow.appendChild(keyCell);
                }
                
                
            } else {
            var keyCell = this.document.createElement("td");
            keyCell.innerText += islah[i][0]; 
            keyCell.style.cssText = "color: #051622; text-align: right; font: 20px Mehr; display: block ruby";
            keyRow.appendChild(keyCell);
        }

        body1.appendChild(keyRow)


        var ravaniTag = this.document.createElement("div");
        ravaniTag.className = "ui label";
        ravaniTag.innerText = "روانی سکور";
        ravaniTag.style.cssText = "font: 17px Mehr; width: 6em; height: 2.5em ; text-align: center; background-color: #f5f5f5  ; color: #1a1a1a";
        body1.appendChild(ravaniTag)

        var ravaniScore = document.createElement("tr");
        ravaniScore.style.cssText = "padding-top: 10px; font: 17px Noto Nastaliq; text-align: right; display: block ruby; width: 100%";
        ravaniScore.innerText = ravani[i];
        if (ravani[i]< 6) {
            ravaniScore.style.cssText += " color: #cd2332"
        } else {
            ravaniScore.style.cssText += " color: #1a6600"
        }
        body1.appendChild(ravaniScore);



        outputTable.appendChild(body1);
        }
        this.localStorage.clear();

    }else {
        window.location.replace("index.html");
    }
}
