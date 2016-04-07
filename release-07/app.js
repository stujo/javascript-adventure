// Put Your Code Below This Line

var currentIndex = 0
var worldTourPlaces = [
{name: "London", description: "Capital of England", imageUrl: "http://www.suffolkcoastsailing.co.uk/_wp/wp-content/uploads/2014/04/tower-bridge1.jpg" }, 
{name: "Paris", description: "Capital of France", imageUrl: "http://travelnoire.com/wp-content/uploads/2014/02/Eiffel-Tower-Paris-France.jpg"}
];

// function printCurrentLocationName() {
//     console.log(worldTourPlaces[currentIndex]);
// }

function printCurrentLocationName() {
    console.log(worldTourPlaces[currentIndex].name);
}

function forward() {
    currentIndex++;
}

function backward() {
    currentIndex++;
}



// DO NOT EDIT TO CODE BENEATH THIS LINE (YET!) 
// Get the basics working first before you try to change anything

// What would this do, I wonder?
//debugger;


function runTutorialChecks() {

    var tutorialChecks = [];

    if (typeof currentIndex !== 'number') {
        tutorialChecks.push('"currentIndex" is not defined as an integer');
    }

    if ((typeof worldTourPlaces === 'undefined') || !Array.isArray(worldTourPlaces)) {
        tutorialChecks.push('"worldTourPlaces" is not defined as an array');
    } else if (worldTourPlaces.length === 0) {
        tutorialChecks.push('"worldTourPlaces" is empty');
    } else {
        if (typeof forward !== 'function') {
            tutorialChecks.push('"forward" is not defined as a function');
        }
        if (typeof backward !== 'function') {
            tutorialChecks.push('"backward" is not defined as a function');
        }
        if ((typeof worldTourPlaces[0].name === 'undefined')) {
            tutorialChecks.push('The objects in the "worldTourPlaces" array do not have a name property');
        }
        if ((typeof worldTourPlaces[0].description === 'undefined')) {
            tutorialChecks.push('The objects in the "worldTourPlaces" array do not have a description property');
        }
        if ((typeof worldTourPlaces[0].imageUrl === 'undefined')) {
            tutorialChecks.push('The objects in the "worldTourPlaces" array do not have an imageUrl property');
        }
    }

    if (typeof printCurrentLocationName !== 'function') {
        tutorialChecks.push('"printCurrentLocationName" is not defined as a function');
    } else {
        printCurrentLocationName();
    }


    tutorialChecks.forEach(function(value) {
        console.error('You\'ve missed a step: ' + value);
    });
}

runTutorialChecks();


function setupApplication(){


	function updateView(place){
       $('#place_name').html(place.name);
       $('#place_description').html(place.description);
       $('#place_card').css({"background":"url("+place.imageUrl+") center / cover"});
	}

	updateView(worldTourPlaces[currentIndex]);
}

setupApplication();




