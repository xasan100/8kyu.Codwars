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