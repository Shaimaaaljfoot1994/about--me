
'use strict';
var score = 0;
var name = prompt(' what is your name?');
alert('welcom ' + name + '  welcome to my bage ');

var shaimaa = [['Is the last name of \"Shaimaa\" is \"jfoot\"?',
'Great answer',
'Oooh, wrong annswer'
],['Is shaimaa age 25 years?',
'Great one, keep going',
'Wrong answer, please enter \"yes\" OR \"no\"'
],['do Shaimaa love swimming ?',
'Of course i do',
'Sorry about that, wrong answer'
]['Has shaimaa studied at the ttu?',
'Wow, Great answer',
'thats rong'
],['do you think shaimaa loves basketball?',
'Oooh, wrong annswer, sorry about that',
'of course i dont']
]

for (var i = 0; i < shaimaa.length; i++) {
    var shaimaa = shaimaa[i];
    var userreply = prompt(shaimaa[0]);
    userreply = userreply.toLowerCase();
    var yesreply = shaimaa[1];
    var noreply = shaimaa[2];
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
var age = prompt('do you know how old iam? ');
var num1 = parseInt(age);

switch (num1) {
    case 25:
        alert('correct answer  iam ' + num1 + ' years old ');
        score++;
        break;
    default:
        for (var j = 0; j <= 4; j++) {
            if (num1 < 18) {
                alert('your answer is too low.');
                var age = prompt('please reanswer the question? ');
                var num1 = parseInt(age);
            } else if (num1 > 30) {
                alert('your answer is too high');
                var age = prompt('please reanswer the question? ');
                var num1 = parseInt(age);

            } else if (num1 === 25) {
                alert('correct answer  iam ' + num1 + ' years old ');
                score++;
            }
            else {
                alert('wrong answer')
                var age = prompt('please reanswer the question? ');
                var num1 = parseInt(age);
            }
        }
}
var color = ['red', 'black', 'banana', 'blue', 'green', 'White'];
var userreplies = prompt('what is the color that i like ?');
userreplies = userreplies.toLowerCase();
for (var h = 0; h < color.length; h++){
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
alert('your score is '+ score)
alert('the color that i like  '+ color[0] + ' ,' + color[1] + ', ' + color[2] + ', ' + color[3] + ' ,' + color[4] + ' and ' + color[5]);
alert('Bye bye   ' + name + ', I hope that you enjoy visiting my site ');
console.log('name', name);
console.log('userreplay', userreply);
console.log('age', age);
console.log('userreplies)', userreplies);
// document.write('<h2>'+score+'</h2>')