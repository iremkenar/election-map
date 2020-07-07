var createPolitician = function (name, partyColor) {
 
    var politician = {}; // new blank object!
    
     politician.name = name; // name property set to the value of the name parameter
     politician.partyColor = partyColor;
     politician.electionResults = null;
     politician.totalVotes = 0;
    
     // method for tallying votes
     politician.tallyUpTotalVotes = function () {
       
      this.totalVotes = 0;
       
      for (var i = 0; i < this.electionResults.length;  i++) 
       {
       this.totalVotes =  this.totalVotes +  this.electionResults[i];
       }
     };
    return politician;
  };
  
  var charlie = createPolitician("Charlie Hawking",[245,141,136]);
  var nina = createPolitician("Nina Brown",[132,17,11]);
  
  console.log("Nina`s color is: " + nina.partyColor);
  console.log("Charlie`s color is: " + charlie.partyColor);
  
  charlie.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
  
  nina.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 2, 3, 11, 2, 3, 1];
  
  charlie.electionResults[9] = 1;
  nina.electionResults[9] = 28;
  charlie.electionResults[4] = 17;
  nina.electionResults[4] = 38;
  charlie.electionResults[43] = 11;
  nina.electionResults[43] = 27;
  
  console.log(charlie.electionResults);
  console.log(nina.electionResults);
  
  var setStateResults = function (state) {
       
        theStates[state].winner = null;
       
         if (nina.electionResults[state] > charlie.electionResults[state]) {
         theStates[state].winner = nina;
          } else if (nina.electionResults[state] < charlie.electionResults[state]) {
         theStates[state].winner = charlie;
          }
       
        var stateWinner = theStates[state].winner;
        
         if (stateWinner !== null) {
           theStates[state].rgbColor = stateWinner.partyColor;
         } else {
           theStates[state].rgbColor = [11,32,57]; 
         }

    var stateInfoTable = document.getElementById("stateResults");
  
        var header = stateInfoTable.children[0].children[0];
        var body = stateInfoTable.children[1];
        
        var stateName = header.children[0];
        var abbrev = header.children[1]; 
        var ninaResults = body.children[0].children[1];
        var charlieResults  = body.children[1].children[1];
        var winnersName = body.children[2].children[1];
        
        body.children[0].children[0].innerText = nina.name;
        body.children[1].children[0].innerText = charlie.name;
        
        stateName.innerText = theStates[state].nameFull;
        abbrev.innerText = "(" +theStates[state].nameAbbrev+ ")";
        ninaResults.innerText = nina.electionResults[state];
        charlieResults.innerText = charlie.electionResults[state];
        
        if (theStates[state].winner === null) {
            winnersName.innerText = "DRAW";
        } else {
            winnersName.innerText = theStates[state].winner.name;
        }
    };
  
  // calling the method for each politician
  nina.tallyUpTotalVotes();
  charlie.tallyUpTotalVotes();
  
  //console log total votes
  console.log(nina.totalVotes);
  console.log(charlie.totalVotes);
  
  var winner = "???"
   if (nina.totalVotes > charlie.totalVotes) {
    winner = nina.name;
   }
   else if (nina.totalVotes < charlie.totalVotes) {
    winner = charlie.name;
   }
   else {
    winner ="DRAW";
   }
  
  console.log("AND THE WINNER IS..." + winner + " !");
  
  var countryInfoTable = document.getElementById("countryResults");
  
  // can also create row as variable to shorten below
   
  countryInfoTable.children[0].children[0].children[0].innerText = nina.name;
  countryInfoTable.children[0].children[0].children[1].innerText = nina.totalVotes;
  countryInfoTable.children[0].children[0].children[2].innerText = charlie.name;
  countryInfoTable.children[0].children[0].children[3].innerText = charlie.totalVotes;
  countryInfoTable.children[0].children[0].children[5].innerText = winner;
  
  
  
  
  
  
  
  
  
  
  
  
  