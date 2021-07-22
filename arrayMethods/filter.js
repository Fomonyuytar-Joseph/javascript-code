//Exercise
const users=[{name:'joseph' , premium:true},
{name:'Dolly' , premium:false},
{name:'Max' , premium:true},
{name:'nazy' , premium:false} ]

const premiumUsers= users.filter(user=>{
    return user.premium;
})
console.log(premiumUsers);




// const scores=[10,30,15,25,50,50,40,5];

// const filteredScores=scores.filter((score)=>{
//     return score>20;
// }

// );
// console.log(filteredScores);