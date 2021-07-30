const form=document.querySelector('.GuessForm');
const result=document.querySelector('.resultText');
const Num=document.querySelector('.userNum')


form.addEventListener('submit',e=>{
    e.preventDefault();
    const randomNum=Math.floor(Math.random()*100);//generate a random number
    const userNum=Num.value;
    if(userNum<randomNum){
        result.textContent="You guess was low";
        result.style.color="green";

    }
    else if(userNum>randomNum){
        result.textContent="You guess was high";
        result.style.color="red";

    }
    else{
        result.textContent=" Hurray You guessed it correctly";
        result.style.color="blue";
        
        
    }
    
    console.log(userNum);
    console.log(randomNum);
})