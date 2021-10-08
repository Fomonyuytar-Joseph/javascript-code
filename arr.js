const split= (str)=>{
  
   const arr=str.split("")
   const cut=arr.splice(arr.indexOf("@"))
   return cut.slice(cut.indexOf("@")+1,cut.indexOf(" ")+1).join("")
  
   

}

console.log(split("hello boy_precious@gmail.com thanks for the challenge"))

console.log(split("Hello sir on date is 14 sept 2021@yahoo.com at 2pm "))



// let arr=["I","study","Javascript","right","now"];
// let arr=[1,2,3,4,5,6]

// var square= arr.map(item=> item *item)
// console.log(square)





// arr.slice(0,3)
// console.log(arr.slice(0,3))






// arr.splice(2,0,"Let's","dance")
// console.log(arr)