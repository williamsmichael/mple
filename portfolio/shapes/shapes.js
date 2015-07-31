//set global variables
var shape, shapeAmount;
var instructions = document.getElementById('instructions');
var container = document.getElementById('container');
var buttonBegin = document.getElementById('buttonBegin');
var inputField = document.getElementById('inputField');
var playerGuess = parseInt(inputField.value);
var chances = 3;


//buttonBegin function
buttonBegin.onclick = function () {

	//clear the container for the geometric shapes
	container.innerHTML = '';

	//function generate random number for shape type and quantity of each shape
	var randNum = function(qty) {
		return Math.floor((Math.random() * qty) + 1);
	}

	var randShapeType = randNum(2);
	var randNumCircles = randNum(10);
	var randNumSquares = randNum(10);
	
	//function generate arrays to define shape type through classes
	var arrayCircles = [];
	var arraySquares = [];
	var arrayCombined = [];

	function arrayCreate(randNumShape, arrayShape, className) {
		for(var i = 0; i < randNumShape; i++) {
			arrayShape.push(className);
		}
	}
	//create individual arrays for circles and squares
	arrayCreate(randNumSquares, arraySquares, "square");
	arrayCreate(randNumCircles, arrayCircles, "circle");

	//combine the circles and squares arrays into a single array
	arrayCombined = arrayCircles.concat(arraySquares);

	//function Fisher–Yates Shuffle
	function shuffle(array) {
	  var m = array.length, t, i;
	  while (m) {
	    i = Math.floor(Math.random() * m--);
	    t = array[m];
	    array[m] = array[i];
	    array[i] = t;
	  }
	  return array;
	}
	//shuffle the combined array
	var arrayRandomized = shuffle(arrayCombined);

	//function create geometric shapes according to random number generated
	function shapeCreate() {
		for(var i = 0; i < arrayRandomized.length; i++) {
			var div = document.createElement("div");
			div.className = arrayRandomized[i];

			//call random number for color of the shape
			var colorType = randNum(10);
			switch(colorType) {
				case(1):
					div.className += " gray1";
					break; 
				case(2):
					div.className += " gray2";
					break; 
				case(3):
					div.className += " green1";
					break;
				case(4):
					div.className += " green2";
					break;  
				case(5):
					div.className += " red1";
					break;
				case(6):
					div.className += " blue1";
					break;  
				case(7):
					div.className += " blue2";
					break;
				case(8):
					div.className += " purple";
					break;  
				case(9):
					div.className += " yellow";
					break; 
				case(10):
					div.className += " orange";
					break;
			}

				var el = document.getElementById('container');
				el.appendChild(div);
			}
		}
		shapeCreate();

	//determine the shape to question player
	if (randShapeType === 1) {
		shape = "circles";
		shapeAmount = randNumCircles; 
	} else {
		shape = "squares";
		shapeAmount = randNumSquares;
	}

	//hide the begin button
	document.getElementById('buttonBegin').style.display = "none";

	//begin interaction with the player
	instructions.innerHTML = "How many " + shape + " do you see... " + chances + " chance(s) <br> Input your answer in the box below";

	//display guess box
	document.getElementById("inputField").style.display = "inline-block";

}

//inputField function
inputField.onkeypress = function (event) {
  if (event.which == 13 || event.keyCode == 13) {
	
		playerGuess = parseInt(inputField.value);

		//begin interactive guessing game
		chances--;
		verifier(playerGuess);
		console.log(playerGuess === shapeAmount);

		//function verify if the player's guess is correct
		function verifier(playerGuess) {
			console.log(chances);
			console.log(playerGuess === shapeAmount);
		  while (chances > 0 && playerGuess !== shapeAmount) {
		    console.log('hi');
		    console.log(chances);
		    if (playerGuess < shapeAmount) {
		      instructions.innerHTML = "Higher. Guess " + shape + " again... " + chances + " chance(s)";
		      var playerGuess = parseInt(inputField.value);
		    } 
		    if (playerGuess > shapeAmount) {
		      instructions.innerHTML = "Lower. Guess " + shape + " again... " + chances + " chance(s)";
		      var playerGuess = parseInt(inputField.value);
		    }
		    chances--;
		  }
		  if (chances === 0 && playerGuess !== shapeAmount) {
		    instructions.innerHTML = "The number of " + shape + " equals " + shapeAmount + ". Game over " + name;
		  }
		  if (playerGuess === shapeAmount) {
		    instructions.innerHTML = "Fantastic! You guessed it!";
		  }
		}

		inputField.value = '';
    return false;
  }
  else return true;


	// //hide guess box
	// document.getElementById("inputField").style.display = "none";

	// //display guess box
	// document.getElementById("buttonRestart").style.display = "inline-block";

}


