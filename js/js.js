'use strict';
var name = prompt(' what is your name?');
alert('welcom  ' + name + '  welcome to my bage ');
console.log('name', name);
var food = prompt('do you eat the Dinner?');
food = food.toLowerCase();
if (food === 'yes') {
    alert('This is harmful to health');
} else if (food === 'y') {
    alert('This is harmful to health');
} else {
    alert('good for you.');
}
console.log('food', food);


var pizza = prompt('do you eat pizza?');
pizza =  pizza.toLowerCase();
if (pizza === 'yes') {
    alert('This is harmful to health');
} else if (pizza === 'y') {
    alert('This is harmful to health');
} else {
    alert('good for you.');
}
console.log('pizza', pizza);

var Fish = prompt('do you eat Fish?');
Fish = Fish.toLowerCase();
if (Fish === 'yes') {
    alert('great,keep going');
} else if (Fish === 'y') {
    alert('great,keep going');
} else {
    alert('Please avoid skipping Fish, because it supplies the body in Omega 3 and essential fatty acids.');
}
console.log('Fish', Fish);



var smoking = prompt('do you smoke?');
smoking = smoking.toLowerCase();
if (smoking === 'yes') {
    alert('no this is bad for your health, would you try to quit');
} else if (smoking === 'y') {
    alert('no this is bad for your health, would you try to quit');
} else {
    alert('good for you.');
}
console.log('smoking', smoking);

var breakfast = prompt('do you eat brakfast?');
breakfast = breakfast.toLowerCase();
if (breakfast === 'yes') {
    alert('great,keep going');
} else if (breakfast === 'y') {
    alert('great,keep going');
} else {
    alert('please avoid skipping breakfast ,lest your blood sugar drop.');
}
console.log('breakfast', breakfast);

alert('good bye   ' + name );