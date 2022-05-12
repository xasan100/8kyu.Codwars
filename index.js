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