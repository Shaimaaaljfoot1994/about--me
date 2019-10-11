/*"use strict";
var username=prompt("what is your name?");
console.log ( "username", username )
alert ("welcom"+ username);
var age= prompt ("are you 25 years old ?");
console.log ( "age", age )
 age =age.toLowerCase();
if (age=== "yes" || age === "y"){
    alert ("it's my age" );
} else if (age==="no"){
    alert ( "maybe your older or younger than me");
}
var name = prompt ( " do you know that  family of shaimaa is jfoot? ?");
console.log ( "name", name )
name =name.toLowerCase();
if ( name=== "yes" || name=== "y"){
    alert ( "it's my name famiy")
}else if ( name==="no"){
    alert ( "new information to know and it's my name family");
}
var food= prompt (" do love food? ?");
console.log ( "food", food )
food =food.toLowerCase();
if ( food=== "yes" || food=== "y"){
    alert("me too");
}else if ( food==="no"){
    alert ("unfortunalety");
}
var read= prompt (" do you like reading a lot? ?");
console.log ( "read",read )
read =read.toLowerCase();
if ( read=== "yes" || read=== "y"){
    alert ("me too ");
}else if ( read==="no"){
    alert ("reading will make you better i'm sure");
}
var game=prompt ("do you like PUBG game ");
console.log ( "game",game )
game =game.toLowerCase();
if ( game=== "yes" || game=== "y"){
    alert("me too");
}else if ( game==="no"){
    alert ("try it, you will fell excited");
} /** */
"use Strict";
username = prompt("what is your name?");
alert("welcom" + username);
console.log("username" + username);
var count=0;
// var questions = [
//     [
//         "are you 25 years old ?",
//         "it's my age",
//         "maybe your older or younger than me",
//     ],
//     [
//         " do you know that  family of shaimaa is jfoot?  ?",
//         "it's my name family",
//         "new information to know and it's my name family",
//     ],
//     [
//         "   do love food?",
//         "me too",
//         "unfortunalety",
//     ],
//     [
//         " do you like reading a lot? ",
//         "me too ",
//         "i think you must start reading",
//     ],
//     [
//         "do you like PUBG game ",
//         "me too",
//         "try it, you will fell excited",
//     ]
// ]
// for (var i = 0; i < 5; i++) {
//     var answer = questions[i];
//     var promptQuestion = answer[0];
//     var posetiveReply = answer[1];
//     var negativeReply = answer[2];
//     var username = prompt(promptQuestion);
//     promptQuestion = promptQuestion.toLowerCase();

//     switch (username){
//         case 'yes':
//         case  'y':
//              alert(posetiveReply);
//         var count= count+1
//              break;
//         case 'no':
//         case 'n':
//             alert(negativeReply);
//             break;
//     default :
//     alert("incorret answer")
//     }
//  }
function userinput1 ( question, yes , no ) {
var response = prompt (question);
response = response.toLowerCase();

if (response == 'yes' || response =='y'){
    alert(yes);
    count = count +1;

} else if (response == 'no' || response == 'n'){
alert(no);    
}
}

userinput1('are you 25 years old ?', "it's my age", "maybe your older or younger than me");
userinput1(" do you know that  family of shaimaa is jfoot?  ?", "it's my name family", "new information to know and it's my name family");
userinput1(   " do love food? ?", "me too","unfortunalety");
userinput1(  " do you like reading a lot? ?", "me too ", "i think you must start reading");
userinput1("do you like PUBG game ","me too", "try it, you will fell excited");

///////////////////////////////////////////Q6//////////////////////////////////////
function age () {

    for (var i = 0; i < 4; i++) {
        var number = prompt("How many my age ?");
        if (number > 25) {
        alert("too high, please try again");
        
    } else if (number < 25) {
        alert("too low, please try again");
        
    } else if (number == 25){
        alert("that's correct");
        count=count+1
        break;
    } 
    if (i==3){
     alert("the correct answer = 25");
}
}
return(number);
}
age ();



// ////////////////////////Q7////////////////////////////////////

function color () {
var lovecolor = ["yallow", "White", "black", "green", "blue", "red"]
for (i = 0; i < 6; i++) {
    var user = prompt("guess one of my top ten lovecolor")
    if (user === lovecolor[0] || user == lovecolor[1] || user === lovecolor[2] || user === lovecolor[3] || user === lovecolor[4] || user === lovecolor[5]) {
        alert("correct answer");
        count=count+1
        break;
    } else {
        alert("you have to try a gain");
    }
}
alert('your correct answer= '+ count);

 return (lovecolor);   
}
color();