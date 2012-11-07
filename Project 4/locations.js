
	var currentlocation = 0  
	var location_initscore = 0;
	var location_1score = 0;
	var location_2score = 0;
	var location_3score = 0;
	var location_4score = 0;
	var location_5score = 0;
	var location_6score = 0;
	var location_7score = 0;
	var location_8score = 0;
	var location_9score = 0;			
	var score = 0;

	
	var item_dogbone = false
	var item_change = false
	var item_bustokens = false
	


	function btn_north_click() {

			switch (currentlocation) {
				case 7:currentlocation = 5;
					location_5();
					updatetext(msg);
					break;
				case 5:currentlocation = 3;
					location_3();
					updatetext(msg);
					break;
				case 3:currentlocation = 0;
					location_init();
					updatetext(msg);
					break;
				case 0:currentlocation = 1;
					location_1();
					updatetext(msg);
					break;
				case 0: 
					location_init();
					updatetext("You cannot go any further North.");
					break;
				}
			}

	function btn_east_click() {

			switch (currentlocation) {
				case 4:currentlocation = 0;
					location_init();
					updatetext(msg);
					break;
				case 0:currentlocation = 2;
					location_2();
					updatetext(msg);
					break;
				case 2: 
					location_2();
					updatetext("You cant go that way.");
					break;	
				case 6:currentlocation = 5;
					location_5();
					updatetext(msg);
					break;
				case 5:currentlocation = 8;
					location_8();
					updatetext(msg);
					break;
				case 8: 
					location_8();
					updatetext("You cant go that way.");
					break;
				case 9:currentlocation = 7
					location_7();
					updatetext(msg);
					break;
				case 7: 
					location_7();
					updatetext("You cant go that way.");
					break;
				}
			}

	function btn_south_click() {

			switch (currentlocation) {
				case 1:currentlocation = 0;
					location_init();
					updatetext(msg);
					break;
				case 0:currentlocation = 3;
					location_3();
					updatetext(msg);
					break;
				case 3:currentlocation = 5;
					location_5();
					updatetext(msg);
					break;
				case 5:currentlocation = 7;
					location_7();
					updatetext(msg);
					break;
				case 7: 
					location_7();
					updatetext("You cannot go any further South.");
					break;
				}
			}

	function btn_west_click() {

			switch (currentlocation) {
				case 2:currentlocation = 0;
					location_init();
					updatetext(msg);
					break;
				case 0:currentlocation = 4;
					location_4();
					updatetext(msg);
					break;
				case 4:
					location_4();
					updatetext(msg);
					break;
				case 8:currentlocation = 5;
					location_5();
					updatetext(msg);
					break;
				case 5:currentlocation = 6
					location_6();
					updatetext(msg);
					break;
				case 6: 
					location_6();
					updatetext("You cannot go any further West.");
					break;
				case 7:currentlocation = 9
					location_9();
					updatetext(msg);
					break;
				case 9: 
					location_9();
					updatetext("You cannot go any further West.");
					break;	
				}
			}





	function location_init() {
		msg = "You are in the middle of the park standing next to a giant slide" ;

		if (location_initscore === 0) {
			location_initscore++;
			score = (score + 5)
			}

		document.getElementById("idNorth").style.visibility="visible";
    	document.getElementById("idEast").style.visibility="visible";
    	document.getElementById("idWest").style.visibility="visible";
    	document.getElementById("idSouth").style.visibility="visible";
	}

	function location_1() {
		msg = "You are standing in front of a large tree. There is a tire swing hanging from it.You can also see a large beehive.";

		if (location_1score === 0) {
			location_1score++;
			score = (score + 5)
			}

		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="hidden";
    	document.getElementById("idWest").style.visibility="hidden";
    	document.getElementById("idSouth").style.visibility="visible";
	}

	function location_2() {
		msg = "You are standing next to the swings. There are a lot of kids playing on them." ;

		if (location_2score === 0) {
			location_2score++;
			score = (score + 5)
			}

		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="hidden";
    	document.getElementById("idWest").style.visibility="visible";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	function location_3() {
		msg = "You are now at the entrance to the park. In front of you there is a large group of people. ";

		if (location_3score === 0) {
			location_3score++;
			score = (score + 5)
			}

		document.getElementById("idNorth").style.visibility="visible";
    	document.getElementById("idEast").style.visibility="hidden";
    	document.getElementById("idWest").style.visibility="hidden";
    	document.getElementById("idSouth").style.visibility="visible";
	}

	function location_4() {
		msg = "You are standing ankle deep in a pond. I suggest you get out before you ruin your shoes." ;

		if (location_4score === 0) {
			location_4score++;
			score = (score + 5)
			}

		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="visible";
    	document.getElementById("idWest").style.visibility="hidden";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	function location_5() {
		msg = "You are now standing with in the group of people and realize that it is a gang war. You need to get away.";

		if (location_5score === 0) {
			location_5score++;
			score = (score + 5)
			}

		document.getElementById("idNorth").style.visibility="visible";
    	document.getElementById("idEast").style.visibility="visible";
    	document.getElementById("idWest").style.visibility="visible";
    	document.getElementById("idSouth").style.visibility="visible";
	}

	function location_6() {
		msg = "You safely got away from the gangs. You are now in a alley. You accidentally walk into a trash can. You then see a dogbone on the ground " ;

		if (location_6score === 0) {
			location_6score++;
			score = (score + 5)
			}

		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="visible";
    	document.getElementById("idWest").style.visibility="hidden";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	function location_7() {
		msg = "After getting away from the gang war your body is exhausted. You go to sit down on a bench when you notice some change on the ground. ";

		if (location_7score === 0) {
			location_7score++;
			score = (score + 5)
			}

		document.getElementById("idNorth").style.visibility="visible";
    	document.getElementById("idEast").style.visibility="hidden";
    	document.getElementById("idWest").style.visibility="visible";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	function location_8() {
		msg = "After geting away from the gang you stand next to a McDonalds. All of a sudden you notice that there is some bus tokens on the ground."; 

		if (location_8score === 0) {
			location_8score++;
			score = (score + 5)
			}

		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="hidden";
    	document.getElementById("idWest").style.visibility="visible";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	function location_9() {
		msg = "You are now standing in front of a butcher shop. You then notice this is the same butcher shop that your mother buys her meat from. If only you had paid attention to hoe she got there the last time she took you. At least you know your getting closer.";

		if (location_9score === 0) {
			location_9score++;
			score = (score + 5)
			}

		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="visible";
    	document.getElementById("idWest").style.visibility="hidden";
    	document.getElementById("idSouth").style.visibility="hidden";
	}




	function btn_score_click() {
		alert("You have " + score + " points.");
			}						


	function updatetext(directionmsg) {
		directionmsg = directionmsg + "[ " + currentlocation + " ]"
		var textadd = document.getElementById("textarea1");
		textadd.value = directionmsg + "\n" + textadd.value;
	}

	function btn_enter_click() {
		var userinput = document.getElementById("txtcommand");



	function take_item() {

		switch (currentlocation) {
			case 8:
				if (item_dogbone === false) {
					item_dogbone = true;
					updatetext ("Dogbone is in your inventory")
					} else {}
					break;
			case 7:
				if (item_change === false) {
					item_change = true;
					updatetext ("Change is now in your inventory")
					} else {}
					break;
			case 6:
				if (item_bustokens === false) {
					item_bustokens = true;
					updatetext ("Bus tokens are now in your inventory")
					} else {}
					break;
			}
		}

	function inventory_check() {

			if (item_dogbone === true) {
				updatetext("Dogbone is in inventory");
				} else {}
			if (item_change === true) {
				updatetext("change is in your inventory");
				} else {}
			if (item_bustokens === true) {
				updatetext("Bus tokens are in your inventory");
				} else {}
			if (item_dogbone === false && item_change === false && item_bustoken === false) {
				updatetext ("Nothing is in your inventory.")
				}
			}

	function help_user(){
 		updatetext("Valid commands are \"n\", \"e\", \"s\", \"w\", \"take\", \"help\", and \"inventory\".  Anything else will not work.  You should find something to get to the bottom of the pot.");
  		}

		switch (userinput.value) {
			
			case "N":
			case "n":
	        	btn_north_click();                
	        break; 
	            
	        case "E":
	        case "e":
	        	btn_east_click();          
	        break;  
	      
			case "S":  
			case "s":
				btn_south_click();          
			break;  
			
			case "W":
			case "w":
				btn_west_click();          
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