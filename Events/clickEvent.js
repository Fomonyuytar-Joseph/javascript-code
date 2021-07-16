const ul=document.querySelector('ul');
//ul.remove();
const items =document.querySelectorAll('li');
 const button=document.querySelector('button');
 button.addEventListener('click',()=>{
    //ul.innerHTML+="<li>Something new</li>"
    //alternative method to add a new element
    const li=document.createElement("li");
    li.textContent="something new";
    ul.append(li);//to add new elements to the bottom if the list
    //ul.prepend(li);//to add elements to the top of the list

 })

 items.forEach( item =>{
    item.addEventListener('click',e =>{// cycles through individuAL items

        //console.log('item clicked');
        //console.log(e);
        //console.log(e.target);
       // e.target.style.textDecoration="line-through";
       e.target.remove();
    })
});
// const button=document.querySelector('button');
// button.addEventListener('click',()=>{
//     console.log("you clicked me");
// })