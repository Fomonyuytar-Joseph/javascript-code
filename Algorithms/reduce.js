var string="d89%l++5r19o7W *o=l645le9H";
var i=string.indexOf(" ");//Get the index of where there is a space in the string
var firstPart=string.slice(0 ,i).replace(/[^a-zA-Z]/g,"");//get the dlorW part and the remove non alphabetic charcters
var secondPart=string.slice(i+1,string.length).replace(/[^a-zA-Z]/g,"");//get the olleH part and the remove non alphabetic charcters
const reverseString =(str)=> str.split('').reverse().join('') //function to reverse our strings
console.log(reverseString(secondPart),reverseString(firstPart)); // output:Hello world

 



//My approch to the problem
 //1)split the string into two
 //2)get the first part and second part and store in variables
 //3)Remove non alphabetic characters and then join them after the removal
 //4) creat a reverse function
 //5)output string in correct order

























// const  scores=[1,2,3,4,5]
// const squares=scores.reduce((acc ,curr) => acc+curr**2 , 0);

// console.log(squares)
// const result=scores.reduce((acc,curr)=>{
//     if(curr>50){
//         acc++
//     }
//     return acc;
// },0)
// console.log(result); 