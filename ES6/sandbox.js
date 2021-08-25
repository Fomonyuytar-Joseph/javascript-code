const namesArray=['joe','max','joe','dolly'];
console.log(namesArray);
// const namesSet= new Set(['joe','max','joe','dolly']);
const namesSet= new Set(namesArray);//eliminates any duplicates
console.log(namesSet);//{'joe','max','dolly'}

const uniqueNames=[...namesSet];//returns the names as an array
console.log(uniqueNames);
 

//Set methods
//.add method
const ages=new Set();
ages.add(25);
ages.add(20).add(50);
//delete method
ages.delete(50);
//size method to check it size
console.log(ages ,ages.size);
//has method to check if it has an element and returns a boolean
console.log(ages.has(25));
//clear() method is used to erase anything from the set
ages.clear();
console.log(ages)
//set are iterable meaning we can use for each loop o them
const users=new Set([{name:'joe',age:'12'},
{name:'doe',age:'22'},
{name:'max',age:'52'}]);

users.forEach(user=>{
    console.log(user.name,user.age);
})















// //rest parameter
// const double=(...nums)=>{
//     //console.log(nums);
//      return nums.map(num=>num*2);

// }
// const result=double(1,2,3,4,5,5,5,6,6,7);
 
//     console.log(result);

//     // spread syntax(...arrays)
//     const food =['eru','stew','ndole'];
//     const ingredients=['maggi','salt','pepper',...food];
//     console.log(ingredients);


//     //spread (...objects)
//     const person ={name:'joseph',age:21,job:'software enginner'};
//     const personClone={...person,town:'buea'};
//     console.log(personClone);

    // let num1=5;
    // num1=num1.toString();
    // let num2=7;
    // let total=Number(num1+num2);
    // console.log(total); 57
    // console.log(typeof total); Number


