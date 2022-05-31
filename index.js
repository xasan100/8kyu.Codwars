// 8 kyu
// Double Char
// JavaScript:
function doubleChar(str){
        var one  = ''
        for (let i = 0; i < str.length; i++) {
           
               one+=str[i]+str[i]+""
           }
            
        
      
          return one
      
      
          }
// 4 days agoRefactorDiscuss
// 7 kyu
// Sort Numbers
JavaScript:
function solution(nums){
    
if(nums==null) {
    return []

}
return nums.sort((a,b)=> a-b)
   }
// 6 days agoRefactor
const solution = nums => nums == null ? [] : nums.sort((a, b) => a - b)
// 14 days agoRefactorDiscuss
// 8 kyu
// Convert a String to a Number!

var stringToNumber = function(str){

  return +str
}
// 6 days agoRefactorDiscuss
var stringToNumber = function(str){
  return +str;
}


// 8 kyu

JavaScript:
function smash (words) {
   return words.join(' ')
};

// 8 kyu
// Jenny's secret message
JavaScript:
function greet(name){
  var one = name.padStart(9,'hello ')
    one=    name.padStart(10,'hello ')
      one = name.padStart(12,'hello ')
     one = "Hello, " + name + "!";
     if(name === "Johnny")
       one = "Hello, my love!";
  return one
    }

// 8 kyu
// Count of positives / sum of negatives
// JavaScript:

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return []

  const positives = input
    .filter(number => Math.sign(number) === 1)
    .reduce(a => a + 1, 0)

  const negatives = input
    .filter(number => Math.sign(number) === -1)
    .reduce((a, b) => a + b, 0)

  return [positives, negatives]
}    


// 8 kyu
// Remove String Spaces
JavaScript:
function noSpace(x){
 return x.split(' ').join('')
}

// 8 kyu
// Reversed Words
JavaScript:
function reverseWords(str){
     return str.split(' ').reverse( ).join(` `)
  }

//   8 kyu
// Beginner - Reduce but Grow
// JavaScript:
function grow(x){
  var arr = x.reduce( (a, b)=> {
    return a*b
})
return arr
}
// last monthRefactorDiscuss
// 8 kyu
// A Needle in the Haystack
JavaScript:
function findNeedle(haystack) {
  let newIndex = haystack.indexOf('needle')
  return `found the needle at position ${newIndex}`
}
// last monthRefactorDiscuss
// 8 kyu
// Convert a Boolean to a String
JavaScript:
function booleanToString(b){
  return b.toString()
}
// last monthRefactorDiscuss
// 8 kyu
// Even or Odd
JavaScript:
function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}
// 2 months agoRefactorDiscuss
// 8 kyu
// Multiply
JavaScript:
function multiply(a, b){
  return a * b
}

// 6 kyu
// Who likes it?
// JavaScript:
function likes(names) {
    if (names.length == 0) return `no one likes this`
    if (names.length == 1) return  `${names[0]} likes this`
    if (names.length == 2) return `${names[0]} and ${names[1]} like this`
    if (names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
    if (names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
};
// last monthRefactorDiscuss
// 8 kyu
// String repeat
JavaScript:
function repeatStr (n, s) {
    return s.repeat(n)
}
// last monthRefactorDiscuss
// 8 kyu
// Remove First and Last Character
JavaScript:
function removeChar(str){
return str.slice(1,-1)

};



// last monthRefactorDiscuss
// 8 kyu
// Return Negative
// JavaScript:
function makeNegative(num) {
  if(num === 0) {
    return 0
  }
  return -Math.abs(num)
} 
// last monthRefactorDiscuss
// 5 kyu
// Simple Pig Latin
JavaScript:
function pigIt(str){
 return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
// last monthRefactorDiscuss
// 8 kyu
// Basic Mathematical Operations
JavaScript:
function basicOp(operation, value1, value2)
{
  return eval(`${value1} ${operation} ${value2}`)
}
// last monthRefactor
function basicOp(operation, value1, value2){
  if(operation == '+') return value1 + value2
  if(operation == '-') return value1 - value2
  if(operation == '*') return value1 * value2
  if(operation == '/') return value1 / value2
}
// last monthRefactorDiscuss
// 8 kyu
// Sum of positive
JavaScript:
function positiveSum(arr) {
  let result = 0;
  arr = arr.filter((v) => v > 0);
  arr.length > 0 ? arr.map((v) => (result += v)) : result = 0
  return result;
}
// last monthRefactorDiscuss
// 8 kyu
// String cleaning
JavaScript:
function stringClean(s){
  return s.replace(/[0-9]/g, "");
}
// last monthRefactor
// 8 kyu
// Convert number to reversed array of digits
JavaScript:
function digitize(n) {
  var b = n
    .toString()
    .split("")
    .map((v) => +v)
    .reverse();

  return b;
}
// last monthRefactorDiscuss
// 8 kyu
// Convert boolean values to strings 'Yes' or 'No'.
JavaScript:
function boolToWord( bool ){
  return bool ?   'Yes':'No'
}
// last monthRefactorDiscuss
// 6 kyu
// Counting Duplicates
JavaScript:
function duplicateCount(text){

  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
// last monthRefactorDiscuss
// 8 kyu
// Simple multiplication
JavaScript:
function simpleMultiplication(number) {
return number % 2 == 0 ? number * 8 : number * 9;
}
// last monthRefactor
// 6 kyu
// Your order, please
JavaScript:
function order(words){
 return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}
// last monthRefactorDiscuss
// 7 kyu
// List Filtering
JavaScript:
function filter_list(l) {
    return l.filter(v => typeof v == 'number');
}
console.log(filter_list([1, 'a', 'b', 0, 15]));
// last monthRefactorDiscuss
// 8 kyu
// Square(n) Sum
JavaScript:
function squareSum(numbers) {
    return eval(numbers.map((n) => n * n).join(' + ')) || 0
}
console.log(squareSum([0]));
// last monthRefactorDiscuss
// 8 kyu
// MakeUpperCase
JavaScript:
function makeUpperCase(str) {

return  str.toString().toUpperCase()
}