class Rabbit{
    constructor(type){
        this.type=type
    }
     speak(line){
        console.log(`This ${this.type} rabbit says ${line}`);

    }

}
let killerRabbit=new Rabbit("killer");
let blackRabbit = new Rabbit("black");



//Prototypes
// let  empty={};
// console.log(empty.toString);





//Methods
// function speak(line){
//     console.log(`This ${this.type} rabbit says ${line}`);
// }

// let whiteRabbit={type:"white",speak};
// let pinkRabbit={type:"pink",speak};
// whiteRabbit.speak("Oh my ears and whiskers, " +
// "how late it's getting!");



//  let rabbit={};
// rabbit.speak=function(line){
//     console.log(`the rabbit says ${line}`);
// }
// rabbit.speak(" i am alive");
 