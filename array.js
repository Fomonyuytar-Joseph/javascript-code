//exercise to reverse an array

 var array1=new Array(); //create an empty array
 var array=[1,2,3,4,5];//array to be reversed 

 for(var i=array.length-1; i>=0; i=i-1){//for loop which starts from array length-1 and decrements right up to 0
    
    array1.push(array[i]); //each element is pushed to the end 
 };
 array=array1//let our old array get the nre array values
console.log(array); // output the reversed array
//output=[5,4,3,2,1]











//creating arrays
// const numbers=[23,24,56,67,34,32,12];
// const num=[1,2,3,4,5,6]


// let val;
// //getting array length
// val=numbers.length;
// //check if is array
// val=Array.isArray(numbers);
// numbers[2]=200;

// let val1=num.reverse();
// val=numbers.shift();

// //finding the index value
// val=numbers.indexOf(32);
// console.log(val1);
// console.log(numbers);
// console.log(val);