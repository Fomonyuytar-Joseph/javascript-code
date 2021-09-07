const  scores=[1,2,3,4,5]
const squares=scores.reduce((acc ,curr) => acc+curr**2 , 0);

console.log(squares)
// const result=scores.reduce((acc,curr)=>{
//     if(curr>50){
//         acc++
//     }
//     return acc;
// },0)
// console.log(result); 