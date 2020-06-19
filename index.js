// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';

var firstLetterToUpperCase = function (str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
console.log(firstLetterToUpperCase(sentence));


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.match(/\d+/g).pop())
