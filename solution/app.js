// Put Your Code Below This Line

var currentIndex = 0
var worldTourPlaces = [
    { 
    	name: "London", 
    	description: "London is a leading global city, with strengths in the arts, commerce, education, entertainment, fashion, finance, healthcare, media, professional services, research and development, tourism, and transport all contributing to its prominence. It is one of the world's leading financial centres and has the fifth-or sixth-largest metropolitan area GDP in the world depending on measurement. London is a world cultural capital. It is the world's most-visited city as measured by international arrivals and has the world's largest city airport system measured by passenger traffic.", 
    	imageUrl: "http://www.suffolkcoastsailing.co.uk/_wp/wp-content/uploads/2014/04/tower-bridge1.jpg" 
    },
    { 
        name: "Paris", 
        description: "Paris was founded in the 3rd century BC by a Celtic people called the Parisii, who gave the city its name. By the 12th century, Paris was the largest city in the western world, a prosperous trading centre, and the home of the University of Paris, one of the first in Europe. In the 18th century, it was the centre stage for the French Revolution, and became an important centre of finance, commerce, fashion, science, and the arts, a position it still retains today. Since the 19th century, the built-up area of Paris has grown far beyond its administrative borders.", 
        imageUrl: "http://travelnoire.com/wp-content/uploads/2014/02/Eiffel-Tower-Paris-France.jpg" 
    },
    { 
        name: "Vienna", 
        description: "Vienna is the capital and largest city of Austria, and one of the nine states of Austria. Vienna is Austria's primary city, with a population of about 1.8 million.", 
        imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/30/4e/vienna.jpg" 
    },
    { 
        name: "Tai Pai", 
        description: "The city proper is home to an estimated population of 2,693,672 in 2009, forming the core part of the Taipei–Keelung metropolitan area which includes the nearby cities of New Taipei and Keelung with a population of 6,900,273, the 40th most-populous urban area in the world. The name Taipei can refer either to the whole metropolitan area or the city proper.", 
        imageUrl: "http://www.outthere.travel/wp-content/uploads/2015/10/OTT-Taipei.jpg" 
    }

];

// function printCurrentLocationName() {
//     console.log(worldTourPlaces[currentIndex]);
// }

function printCurrentLocationName() {
    console.log(worldTourPlaces[currentIndex].name);
}

function forward() {
	if(currentIndex < worldTourPlaces.length - 1){
      currentIndex++;
      return true;
    } else { 
      return false;
    }
}

function backward() {
	if(currentIndex > 0){
      currentIndex--;
      return true;
    } else { 
      return false;
    }
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


function setupApplication() {

    function _currentPlace() {
        return worldTourPlaces[currentIndex];
    }

    function bindCallbacks() {
        $('#button_backward').click(function() {
            backward();
            updateView();
        });
        $('#button_forward').click(function() {
            forward();
            updateView();
        });
    }

    function updateView() {
    	var place = _currentPlace();
        if (typeof place === "undefined") {
            $('#place_name').html("UNDEFINED");
            $('#place_description').html("currentIndex is " + currentIndex + ", check you backwards and forwards implementations and check release 5 is implemented correctly");
            $('#place_card').css({
                "background": "none",
                "background-color": "#333"
            });
        } else {
            $('#place_name').html(place.name);
            $('#place_description').html(place.description);
            $('#place_card').css({ "background": "url(" + place.imageUrl + ") center / cover" });
        }
    }


    function preloadImages() {
    	worldTourPlaces.forEach(function(place, index){
    		var img = new Image();
    		if(index == currentIndex){
    			$(img).load(updateView);
    	  	}
    	  	img.src = place.imageUrl;
    	});
    }
    preloadImages();
    bindCallbacks();
}

setupApplication();
