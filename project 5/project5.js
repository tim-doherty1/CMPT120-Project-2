var currentlocation = 2  

	//room toggle scores 
	var room0score = 0;
	var room1score = 0;
	var room2score = 0;
	var room3score = 0;
	var room4score = 0;
	var room5score = 0;
	var room6score = 0;
	var room7score = 0;
	var room8score = 0;
	var room9score = 0;			

					   N    E   S    W
	var nav = new Array(           /*  0    1   2    3  */  //0 is north, 1 is east, 2 is south, 3 is west,
	                     /* 0 */     [-1,  -1,  1,  -1],
	                     /* 1 */     [ 0,  -1,  4,  -1],
	                     /* 2 */     [-1,   3, -1,  -1],
	                     /* 3 */     [-1,   4, -1,   2],
	                     /* 4 */     [ 1,   5,  -1,   3],
	                     /* 5 */     [-1,   6,  8,   4],
	                     /* 6 */     [-1,   -1, 7,   5],
	                     /* 7 */     [ 6,  -1, -1,   -1],
	                     /* 8 */     [ 5,  -1,  9,  -1],
	                     /* 9 */     [ 8,  -1, -1,  -1]

	                    ); //array within the array makes the grid

	var locationArray = new Array();

	var inventoryArray = new Array();


	//the total score from the toggles
	var score = 0;

	//tally up the moving amounts
	var movecount = 0

	//the basis for all items
	function proto_item(_id, _name, _description) {
   		
   		this.id      		= _id;
   		this.name     		= _name;
   		this.description   	= _description;
   		
	   this.toString = function() {
	      var retVal = "";
	      retVal = "[Item]"                 	        + "\n" + 
	               "Id:" + this.id           		    + "\n" +
	               "Name:" + this.name       		    + "\n" +
	               "Description:" + this.description    + "\n";
	      return retVal;
	   }   
	}




	
function take_item() {

		item_change 	= new proto_item(0, "change", "it is mostly quarters and dimes.");
		item_dogbone	= new proto_item(1, "dog bone", "it is a chewed up dog bone.");
		


		switch (currentlocation) {
			case 0: 
					inventoryArray[0] = item_change
					updatetext ("Your inventory now contains the change.")

					break;
			
			
			case 1:
					inventoryArray[1] = item_dogbone
					updatetext ("Your inventory now contains the dog bone.")

					break;
			}
		}

	function inventory_check() {

		updatetext(inventoryArray);

		}


	// prototype
	function proto_location(_id, _name, _description, _item) {
   		this.id      		= _id;
   		this.name     		= _name;
   		this.description   	= _description;
   		this.item       	= _item;
   		
	   this.toString = function() {
	      var retVal = "";
	      retVal = "[Room]"                 	        + "\n" + 
	               "Id:" + this.id           		    + "\n" +
	               "Name:" + this.name       		    + "\n" +
	               "Description:" + this.description    + "\n" +
	               "Item:" + this.item       			+ "\n";
	      return retVal;
	   }   
	}
         
	function creating_locations() {
  		

  		location0 = new proto_location("0", "Giant slide", "You are standing next to a giant slide. you see some change at the bottom of the slide", "change");
  		location1 = new proto_location("1", "Huge Tree", "You are standing in front of a large tree. There is a tire swing hanging from it.You also see a dog bone on the ground.", "dog bone");
  		location2 = new proto_location("2", "Pond", "You are standing ankle deep in a pond. I suggest you get out before you ruin your shoes.", "");
  		location3 = new proto_location("3", "Swings", "You are standing next to the swings. There are a lot of kids playing on them.", "");
  		location4 = new proto_location("4", "Bench", " You sit down on a bench when you notice two children fighting.", "");
  		location5 = new proto_location("5", "Park Entrance", "You are now at the entrance to the park. In front of you there is a large group of people. ", "");
  		location6 = new proto_location("6", "Mcdonalds", "After geting away from the gang you stand next to a McDonalds.", "");
  		location7 = new proto_location("7", "Butcher Shop", "You are now standing in front of a butcher shop. You then notice this is the same butcher shop that your mother buys her meat from. If only you had paid attention to hoe she got there the last time she took you. At least you know your getting closer.", "");
  		location8 = new proto_location("8", "Garden", "your walking in someones garden when you notice asnake on the ground", "");
  		location9 = new proto_location("9", "Bus Stop", "You are now standing at a bus stop and you can see a bus coming", "");

  		locationArray[0] = location0;
  		locationArray[1] = location1;
  		locationArray[2] = location2;
  		locationArray[3] = location3;
  		locationArray[4] = location4;
  		locationArray[5] = location5;
  		locationArray[6] = location6;
  		locationArray[7] = location7;
  		locationArray[8] = location8;
  		locationArray[9] = location9;

}





	function btn_move_click(direction) {
		movecount = movecount + 1
		direction = direction
		var newlocation = nav[currentlocation][direction];
		if (newlocation !== -1) {
			currentlocation = newlocation;
			VisablityScore(newlocation)
			creating_locations();
			updatetext(locationArray[currentlocation]);
		} else { updatetext("you can't go this way.")}

	}



	function VisablityScore(newlocation) {
		var newlocation = newlocation
		switch (newlocation) {
				case 0: if (room0score === 0) {
							room0score++;
							score = (score + 5)
							}

						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="visible";
				break;
				case 1: if (room1score === 0) {
							room1score++;
							score = (score + 5)
							}

						document.getElementById("idNorth").style.visibility="visible";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="visible";

				break;
				case 2: if (room2score === 0) {
							room2score++;
							score = (score + 5)
							}

						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="visible";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;
				case 3: if (room3score === 0) {
							room3score++;
							score = (score + 5)
							}

						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="visible";
				    	document.getElementById("idWest").style.visibility="visible";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;
				case 4: if (room4score === 0) {
							room4score++;
							score = (score + 5)
							}

						document.getElementById("idNorth").style.visibility="visible";
				    	document.getElementById("idEast").style.visibility="visible";
				    	document.getElementById("idWest").style.visibility="visible";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;
				case 5: if (room5score === 0) {
							room5score++;
							score = (score + 5)
							}

						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="visible";
				    	document.getElementById("idWest").style.visibility="visible";
				    	document.getElementById("idSouth").style.visibility="visible";

				break;
				case 6: if (room6score === 0) {
							room6score++;
							score = (score + 5)
							}

						document.getElementById("idNorth").style.visibility="hidden";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="visible";
				    	document.getElementById("idSouth").style.visibility="visible";

				break;
				case 7: if (room7score === 0) {
							room7score++;
							score = (score + 5)
							}

						document.getElementById("idNorth").style.visibility="visible";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;
				case 8: if (room8score === 0) {
							room8score++;
							score = (score + 5)
							}

						document.getElementById("idNorth").style.visibility="visible";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="visible";

				break;
				case 9: if (room9score === 0) {
							room9score++;
							score = (score + 5)
							}

						document.getElementById("idNorth").style.visibility="visible";
				    	document.getElementById("idEast").style.visibility="hidden";
				    	document.getElementById("idWest").style.visibility="hidden";
				    	document.getElementById("idSouth").style.visibility="hidden";

				break;		
		}
	}

	function btn_score_click() {
		alert("You have " + score + " points.");
			}											

	function updatetext(directionmsg) {
		directionmsg = directionmsg + "[ " + currentlocation + " ]"
		var textadd = document.getElementById("textarea1");
		textadd.value = textadd.value + "\n" + directionmsg;
		textadd.scrollTop = textadd.scrollHeight;
		}

	function btn_enter_click() {
		var userinput = document.getElementById("txtcommand");

	function help_user(){
 		updatetext("Valid commands are \"n\", \"e\", \"s\", \"w\", \"take\", \"help\", and \"inventory\".  Anything else will not work.  You should find something to get to the bottom of the pot.");
  		}

		switch (userinput.value) {
			//direction inputs
			case "N": 
	        case "n":
	        	btn_move_click(0);          
	        break;     
	        case "E":
	        case "e":
	       		btn_move_click(1);          
			break;  
			case "S":
			case "s":
				btn_move_click(2);          
			break;  
			case "W":  
			case "w":
				btn_move_click(3);          
			break;  

		
			case "Take":
			case "take":
				take_item();
			break;

			
			case "Help":
			case "help":
				help_user();
			break;

			
			case "Inventory":
			case "inventory":
				inventory_check();
			break;

			default:
         	   updatetext ("Valid commands are \"n\", \"e\", \"s\", \"w\", \"take\", \"help\", and \"inventory\". ");                   
      		}
      	}			
		