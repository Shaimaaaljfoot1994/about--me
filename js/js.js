'use strict';
var name = prompt(' what is your name?');
while ( !isNaN(name)){
name =prompt('please ,write your name first!\n\nAnd you allow to enter only text .')
}

alert('welcom  ' + name + '  welcome to my bage ');
console.log('name', name);

var shaimaa = [
    ['Is the last name of \"Shaimaa\" is \"jfoot\"?',
    'Great answer',
    'Oooh, wrong annswer'
    ],
    ['Is shaimaa age 25 years?',
    'Great one, keep going',
    'Wrong answer, please enter \"yes\" OR \"no\"'
    ],
    ['do Shaimaa love swimming ?',
    'Of course i do',
    'Sorry about that, wrong answer'
    ],
    ['Has shaimaa studied at the ttu?',
    'Wow, Great answer',
    'thats rong'
    ],
    ['do you think shaimaa loves basketball?',
    'Oooh, wrong annswer, sorry about that',
    'of course i dont'
    ]
]



getQuestion();



var score = 0, age, num1;

for (var j = 0; j <= 4; j++) {
    age = prompt('do you know how old iam? ');
    num1 = parseInt(age);
    if(num1 == 25){
        alert('correct answer  iam ' + num1 + ' years old ');
        score++;
        j=5;
        break;
    }else if (num1 < 18) {
        alert('your answer is too low.');
    }else if (num1 > 30) {
        alert('your answer is too high');
    }else if(isNaN(num1)){
        alert('please, you allow to enter only number');
    }
}


var color = ['red', 'black', 'yallow', 'blue', 'green', 'White'];
var userreplies = prompt('what is the color that i like ?');
userreplies = userreplies.toLowerCase();

for (var h = 0; h < color.length; h++){
    checkMyColor();
}
alert('your score is '+ score)
alert('the color that i like  '+ color[0] + ' ,' + color[1] + ', ' + color[2] + ', ' + color[3] + ' ,' + color[4] + ' and ' + color[5]);
alert('Bye bye   ' + name + ', I hope that you enjoy visiting my site ');
// console.log('name', name);
// console.log('userreplay', userreply);
// console.log('age', age);
// console.log('userreplies)', userreplies);
// document.write('<h2>'+score+'</h2>')




function checkMyColor(){

    switch (userreplies) {
        case 'red':
        case 'black':
        case 'blue':
        case 'green':
        case 'Yellow':
        case 'White':
            alert('correct answer ' );
            var userreplies = prompt('what is the  other color that i like ?');
            score++;
            break;
        default:
            
                alert('wrong answer');
                var userreplies = prompt('please reanswer the question?and choose from these choice (purple , blue , white, black, green, broun, red , orang ,grey)');
    }

}

function getQuestion(){
    for (var i = 0; i < shaimaa.length; i++) {
        var shaimaa2 = shaimaa[i];
        var userreply = prompt(shaimaa2[0]);
        userreply = userreply.toLowerCase();
        var yesreply = shaimaa2[1];
        var noreply = shaimaa2[2];
        switch (userreply) {
            case 'yes':
            case 'y':
                alert(yesreply);
                break;
            case 'no':
            case 'n':
                alert(noreply);
                break;
            default:
                alert('wrong answer');
        }
    }
}