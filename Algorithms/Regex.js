const fakeBinary= (str)=>{
   
     let array=str.split("")

 array.forEach((element,index) => {
    const reg= new RegExp("[0-4]")
    if(reg.test(array[index])){
        array[index]=0
    }
    else{
        array[index]=1
    }

     
 });

    
    
 
return array.join('')       


}
console.log(fakeBinary('1378'))

//for(var i=0;i<array.length;i++){
    //      const reg= new RegExp("[0-4]")
    //      if(reg.test(array[i])){
    //          array[i]=0;}
    //          else{
    //          array[i]=1
    //         }
           
    
    // }






// let re1=new RegExp("[0-9]");
// const name ="in ";
// const sting="how it hurts"
// const Test=re1.test(name);
// console.log(sting.split(''));
// console.log(Test)