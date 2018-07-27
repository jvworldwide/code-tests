const doubleEvens = function(arrayToDouble) {
    let inputArray = arrayToDouble;
    let filtered = inputArray.filter(a => inputArray.indexOf(a)%2===1);
    let multiply = filtered.map(x => x * 2);

//    console.log(filtered);
//    console.log(multiply);
}
 // doubleEvens([1,2,3,4,5,6]);
 
 module.exports = doubleEvens;