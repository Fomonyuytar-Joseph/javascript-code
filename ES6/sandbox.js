//rest parameter
const double=(...nums)=>{
    //console.log(nums);
     return nums.map(num=>num*2);

}
const result=double(1,2,3,4,5,5,5,6,6,7);
 
    console.log(result);

    // spread syntax(...arrays)
    const food =['eru','stew','ndole'];
    const ingredients=['maggi','salt','pepper',...food];
    console.log(ingredients);


    //spread (...objects)
    const person ={name:'joseph',age:21,job:'software enginner'};
    const personClone={...person,town:'buea'};
    console.log(personClone);

    // let num1=5;
    // num1=num1.toString();
    // let num2=7;
    // let total=Number(num1+num2);
    // console.log(total); 57
    // console.log(typeof total); Number


