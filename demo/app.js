console.log("Your JavaScript is Running....");



// Your Code Can Go Here



// Leave this alone until you can figure out what it's doing

if(typeof jQuery === "undefined"){
  console.error("jQuery has not been loaded")
} else {
  console.log("jQuery is loaded!")
}

function toggle_image(){
  $('#picture').toggle();
}

$('#demo_button').click(toggle_image);

console.log("Your JavaScript has Run!");
