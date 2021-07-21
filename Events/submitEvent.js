const form= document.querySelector('.signup-form');

form.addEventListener('submit',e=>{
    e.preventDefault();
    console.log(form.username.value);

})
//testing regex
const username='joe';
const pattern=/[a-z]{6,}/;
let result = pattern.test(username);
console.log(result);
