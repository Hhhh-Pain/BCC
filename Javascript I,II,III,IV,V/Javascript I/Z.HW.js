

/* In this example we will use the same setup as before.. but just use it over and over. 
Try for yourself .. create a new prompt assigned to a variable 
and display it on the html page with agetElementbyID   */


var questionOne = prompt("Name A Name");
document.getElementById("blankOne").innerHTML = questionOne;

var questionOne = prompt("Name A Noun");
document.getElementById("blankTwo").innerHTML = questionOne;


/* for the final version we will add a string to the varable for the printout */

var questionOne = prompt("Name A Noun (second one)");
document.getElementById("blankThree").innerHTML = questionOne + '!!' ;

var questionOne = prompt("Name A Date (MM/DD/YYYY)");
document.getElementById("blankFour").innerHTML = questionOne;


