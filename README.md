# Javascript Adventure

* Arrays
* Objects
* Functions
* Return Values
* Conditionals
* A little bit of jQuery

#Setup to DBC JavaScript Intro

* Get slides: [bit.ly/dbcseattlejsslides](http://bit.ly/dbcseattlejsslides )
* Get the code: [bit.ly/dbcseattlejs](http://bit.ly/dbcseattlejs)
* Use REPL.IT : [https://repl.it/languages/javascript](https://repl.it/languages/javascript)
* Chatroom : [tlk.io/seattlejsintro](https://tlk.io/seattlejsintro)

#Release 1 - Arrays
Make a simple list of places you want to visit 
##Hints
+ Create a local variable called ``worldTourPlaces``
+ Assign it to be a list of ``Strings`` 
+ Each String in the Array should be the name of a place you want to visit

##Playtime
+ How can you use console.log to print out the first place name?
+ How can you print out the last place name?
+ How can you add another place to the end of the ``worldTourPlaces`` array?

#Release 2 - Accessing an Array using an index
Remember where you are on your tour
##Hints
+ Create a variable ``currentIndex`` which stores the index of your current location in ``worldTourPlaces`` 

##Playtime
+ Print out the name of your current location using ``worldTourPlaces`` and ``currentIndex``
+ Manually change the value of ``currentIndex`` and repeat

#Release 3 - Functions
Encapsulate the code you've been using to print out the current location in a function called ``currentLocation``
##Hints
+ Make a function called ``printCurrentLocationName`` which uses ``console.log``, ``worldTourPlaces`` and ``currentIndex`` to print out the current location

##Playtime
+ Print out the name of your current location using ``printCurrentLocationName()``
+ Manually change the value of ``currentIndex`` and repeat

#Release 4 - More Functions
Allow yourself to move forward and backward on your tour, with ``function``s
##Hints
+ Google how to increment a number in JavaScript
+ Make a function called ``forward`` which increments the value of ``currentIndex``
+ Make a function called ``backward`` which decrements the value of ``currentIndex``

##Playtime
+ Print out the name of your current location using ``printCurrentLocationName()``
+ Use ``forward()`` and ``backward()`` a few times and repeat
+ What happens when you move too far forward or too far backwards?

#Release 5 - Conditionals
Improve your ``forward`` and ``backward`` functions so that you cannot move to an undefined location
##Hints
+ Check the length of the ``worldTourPlaces`` array
+ Use ``if``
+ Return ``true`` if the operation was successful otherwise ``false``

##Playtime
+ Test them both out

#Release 6 - Loops
Loop through your ``worldTourPlaces`` array and ``console.log()`` each one of the places

##Hints
+ Use a ``for`` loop which checks the ``length`` of the array

##Playtime
+ How could you use a while loop instead?
+ Find out about JavaScript's Array ``forEach`` and try to use it


#Release 7 - Objects
Instead of just storing the name of each place you want to visit as a String, use JavaScript Objects instead. For each place; store the name as well as the URL of a picture and a description of the place.
##Hints
+ Change your ``worldTourPlaces`` Array of Strings to an Array of Objects
+ Use properties called ``name``, ``description`` and ``imageUrl`` to store the new data
+ Use [Google Image Search](https://www.google.com/search?q=tower+bridge&tbm=isch) to find images and copy the urls
+ What needs to change in the code we've already written, to accomodate this new structure?
+ Create a new function called ``currentLocationImageUrl()`` which returns the ``imageUrl`` property for the current location

##Playtime
+ Check that ``printCurrentLocationName()`` still works and if it doesn't:  fix it

#Release 8 - jQuery
Now we are going to use the code you've written along with jQuery to make a tour guide
##Hints
+ Create an empty folder called ``worldtour`` on your desktop
+ Download the [index.html template](https://raw.githubusercontent.com/stujo/javascript-adventure/master/project/index.html) and save it in the ``worldtour`` folder
+ Download the [app.js template](https://raw.githubusercontent.com/stujo/javascript-adventure/master/project/app.js) and save it in the ``worldtour`` folder
+ Download the [styles.css template](https://raw.githubusercontent.com/stujo/javascript-adventure/master/project/styles.css) and save it in the ``worldtour`` folder
+ Open your local ``worldtour/index.hml`` in your text editor (Use Sublime)
+ Open your local ``worldtour/app.js`` in your text editor (Use Sublime) and read it
+ Follow the instructions in that file
+ Open your local ``worldtour/index.hml`` file in your browser (Use Chrome)

##Playtime
+ Add another button which has the function of restarting the tour at the beginning
+ Try to add some HTML elements to a new ``div`` (hint: give it an id attribute) in the page using the jQuery ``.html()`` function

# Next Steps

* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
* [Eloquent JavaScript](http://eloquentjavascript.net/)
* [Learn to Program - Ruby](https://pine.fm/LearnToProgram/chap_06.html)
