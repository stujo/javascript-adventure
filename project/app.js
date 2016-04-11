// Put Your Code Below This Line


// YOUR CODE HERE!


// Save this file and open ./index.html in your browser


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
