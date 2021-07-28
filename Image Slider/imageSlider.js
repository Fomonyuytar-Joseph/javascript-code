const prev=document.querySelector(".previous");
const next=document.querySelector(".next");
const image= document.querySelector(".image")


var array =["showAdmin.png","showStudent.png","AddnewordPage.PNG","UserandParentSignUp.PNG"];
var i=0;
//next button
next.addEventListener("click",()=>{
    i++;
   if(i>array.length-1)//checks if i is greater that the number of images
   {
      i=0; //set it back to the first image
   }
   
  image.src=array[i];
});
//previous button
prev.addEventListener("click",()=>{
   i--;
   if(i<0){//checks if our incremet is less than 0;
    i=array.length-1;//set it back to the last image

   }
 
   image.src=array[i];
    
});