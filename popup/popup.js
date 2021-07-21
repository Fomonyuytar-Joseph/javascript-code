const button= document.querySelector('button');
const popup=document.querySelector('.popup-wrapper');
const close=document.querySelector('.popup-close');

button.addEventListener('click',()=>{
    popup.style.display='block';// displays  out popup
});

close.addEventListener('click',()=>{
   popup.style.display='none';// close the popup
});
popup.addEventListener('click',()=>{
    popup.style.display='none';// close the popup when we click around it
 });