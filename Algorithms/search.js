// // binary search
function binarySearch(array,n){
    var lowIndex = 0; var highIndex = array.length-1;
    while(lowIndex<=highIndex){
    var midIndex = Math.floor((highIndex+lowIndex) /2);
    if (array[midIndex]==n) {
    return midIndex;
    } else if (n>array[midIndex]) {
    lowIndex = midIndex;
    } else {
    highIndex = midIndex;
    }
    }
    return -1;
    }
    console.log(binarySearch([1,2,3,4], 4)); // true



// function linearSearch(array,n){
//     for(var i=0;i<array.length;i++){
//         if(array[i]==n){
//             return true;

//         }
//     }
//     return false;
// }
// console.log(linearSearch([1,2,3,4,5],9));



