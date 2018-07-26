// Find the longest word in a string
// Ex. "The quick brown fox jumped over the lazy dog"\
// Ex. "What if we try a super-long word as otorhinolaryngology"

// BASIC SOLUTION
// function findLongestWord(str) {
//     var words = str.split(' ');
//     var maxLength = 0;
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             maxLength = words[i].length;
//         }
//     }
//     return maxLength;
// }

// INTERMEDIATE SOLUTION
// function findLongestWord(str) {
//     return str.split(' ').reduce(function(x,y) {
//         return Math.max(x, y.length)
//     }, 0);
// }

// ADVANCED SOLUTION
// function findLongestWord(str){
//     str = str.split(' ');

//     if (str.length == 1) {
//         return str[0].length;
//     }
//     if (str[0].length >= str[1].length) {
//         return findLongestWord(str.join(' '));
//     }
//     if (str[0].length <= str[1].length) {
//         return findLongestWord(str.slice(1, str.length).join(' '));
//     }
//     return str.length;
// }
module.exports = findLongestWord;