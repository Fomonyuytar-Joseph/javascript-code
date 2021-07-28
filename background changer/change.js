const button=document.querySelector(".change-btn");
const color=document.querySelector(".color");
const body=document.body;
button.addEventListener('click',()=>{


     //get random background numbers
 const getRandomBG = ()=>{
    return Math.floor(Math.random()*256);
} 

   
    const col1=getRandomBG();
    const col2=getRandomBG();
    const col3=getRandomBG();
    const colorString=`rgb(${col1},${col2},${col3})`;// arranges into the rgb color format
    body.style.background=colorString;// change color of the background
    color.textContent=colorString;// displays the rgb color text below the button
    button.style.color=colorString;//changes the color of the text on the button to the new background color
    //console.log(colorString);

    

 
});
 
