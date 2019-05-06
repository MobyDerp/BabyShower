var totalRows = 5;
var totalCols = 5;
var babyWordsList = [ "Diapers", "Diaper Pail", "Cloth Diaper", "Nursing Pads", "Burp Cloth", "Baby Shark", "The wheels on the bus", "Are you sleeping", "Baby Lullaby", "Cereal", "Baby", "Hush Little Baby", "This Little Piggy", "Baby Powder", "First Vacation", "First Laugh", "First Haircut", "First Food", "First Laugh", "First Playdate","Teething Ring", "Alphabet Blocks", "Hooded Towel", "Nursery Rhymes", "Rockabye baby", "First Step", "First Tooth", "First Word", "First Book", "First Birthday", "Stuffed animals", "Pikachu", "Sailor Moon", "Star Wars", "Tickle Me Elmo", "Sophie The Giraffe", "Hello Kitty", "Batman and Robin", "Big Bird", "Bassinet", "Onsies", "Crib", "Baby Monitor", "Pump", "Bibs", "Baby Wipes", "Nightlight", "Booties", "Baby Swing", "High chair", "Security Blanket", "Baby Formulas", "Diaper Bag", "Ointments", "Baby carrier", "Stroller", "Play Pen", "Baby food","Bottle Warmer", "Thermometer", "Sippy Cup", "Sleep sack", "Nap time", "Rubber Duckies"];

function inputValidation(){
  var input, text;
  //get the value of the input field wtih id="response"
  input = document.getElementById("response").value;
  document.getElementById("dataValidation").innerHTML = "";
  console.log(input);
  if (isNaN(input) || input < 1 ) {
    text = "Input is not valid. Please enter at least 1."
    document.getElementById("dataValidation").innerHTML = text;
  } else {
    //text = "Generating " + input + " BINGO Sheets."
    //clear original content
    document.getElementById("div1").innerHTML = "";
    runBingo();
  }

}

function shuffle(arry) {
  var ctr = arry.length;
  var index;
  var temp;

  //While there are elements in the array
  while (ctr > 0) {
    //pick a random number
    index = Math.floor(Math.random() * ctr);
    //decrement ctr by 1
    ctr--;
    //swap the last element with it
    temp = arry[ctr];
    arry[ctr] = arry[index];
    arry[index] = temp;
  }
  return arry;
}

function fillInBingo(){
  // get the reference for the body
  var div1 = document.getElementById('div1');
  // creates a <table> element
  var tbl = document.createElement("table");
  var count = 0;
  // creating rows
  for (var r = 0; r < totalRows; r++) {
       row = document.createElement("tr");
      // create cells in row
      for (var c = 0; c < totalCols; c++) {
         cell = document.createElement("td");
         console.log(r,c);
         var word = babyWordsList[count];
         console.log(word);
         count++;
         if (c == 2 && r == 2) {
           var img = document.createElement('img');
           img.src = "resources/images/baby-shower-drawing-1.jpg";
           cell = img;
           document.body.appendChild(cell);
         } else {
           cell.innerHTML = word;
           document.body.appendChild(cell);
         }
         row.appendChild(cell);
      }
    tbl.appendChild(row); // add the row to the end of the table body
  }
  // Create an empty <thead> element and add it to the table:
  var header = tbl.createTHead();

  // Create an empty <tr> element and add it to the first position of <thead>:
  var row = header.insertRow(0);

  // Insert a new cell (<td>) at the first position of the "new" <tr> element:
  var cell = row.insertCell(0);

  // Add some bold text in the new cell:
  cell.innerHTML = "BINGO";
  cell.setAttribute("colspan", 5);
  cell.setAttribute("class", "Bingo");
  div1.appendChild(tbl); // appends <table> into <div1>
}

function runBingo(){
  var i;
  var j;
  j= document.getElementById("response").value;
  console.log(j);
  console.log("running Bingo");
  for (i = 0; i < j; i++) {
    console.log("inside the for loop");
    shuffle(babyWordsList);
    //document.write(i);
    fillInBingo();
  }
}

function generate_calling_card(){
  var input, text;
  //get the value of the input field wtih id="response"
  input = document.getElementById("response").value;
  if (isNaN(input) || input < 1 ) {
    text = "Input is not valid. Please enter at least 1."
    document.getElementById("dataValidation").innerHTML = text;
  } else {
    //text = "Generating " + input + " BINGO Sheets."
    //clear original content
    document.getElementById("div1").innerHTML = "";

    var i;
    var j;
    var div1 = document.getElementById('div1');
    for (j=0; j < input; j++){
      shuffle(babyWordsList);
      var headings = document.createElement('p');
      var index, callingIdx;
      index = j+1;
      console.log(index);
      callingIdx = "Calling Card Number " + index;
      console.log(callingIdx);
      headings.innerHTML=callingIdx;
      var orderedList =document.createElement('ol');
      for(i = 0; i < babyWordsList.length; i++){
        var word = babyWordsList[i];
        var listItem = document.createElement("li");
        listItem.innerHTML=word;
        orderedList.appendChild(listItem);
      }
      div1.appendChild(headings);
      div1.appendChild(orderedList);
    }
  }
}

function displayWordList(){
    document.getElementById("div2").innerHTML = "";
    var i;
    var j;
    var div1 = document.getElementById('div2');

    var orderedList =document.createElement('ol');
    for(i = 0; i < babyWordsList.length; i++){
      var word = babyWordsList[i];
      var listItem = document.createElement("li");
      listItem.innerHTML=word;
      console.log(listItem);
      orderedList.appendChild(listItem);
    }
    div1.appendChild(orderedList);

}
