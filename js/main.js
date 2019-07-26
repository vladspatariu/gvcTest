document.addEventListener('DOMContentLoaded', function(){ 

    var request = new XMLHttpRequest();

    request.open("GET","js/PartyCasinoJackpotsGBP.json", false);
    request.send(null);
    // Parsing it and converting the string to a workable number
    var jsonData = JSON.parse(request.responseText);
    var jackPotValue = parseFloat(jsonData['PartyCasino Jackpots json feed'][31]['jackpotValue']);

    // Targeting my Element, populating it with the value extracted from the JSON
    (function() { 
        var jackpotElement = document.getElementById('jackpot-value');
        
        jackpotElement.innerText =  jackPotValue; 
        // set interval every 5 seconds, randomized logic for added realistic effect (between 00.1 & 00.5) and limiting the results to two decimals (toFixed) 
        setInterval (function myFunction() {
            jackpotElement.innerHTML = (+jackpotElement.innerHTML + Math.floor((Math.random() * 5) + 1)/100).toFixed(2);
        }, 5000);
        
      })();
}, false);
