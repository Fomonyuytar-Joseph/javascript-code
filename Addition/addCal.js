const form =document.querySelector(".add-form");
const answer=document.querySelector(".answer");
const complain=document.querySelector(".complain");




form.addEventListener('submit' ,e=>{
    e.preventDefault();
    //testing regex
    const pattern=/^[0-9]{1,}$/; //regex
    const val1=form.firstnum.value;
    const val2=form.secondnum.value;
  if(!(pattern.test(val1)&&pattern.test(val2))){//if user enters any character that is not a number
      complain.textContent="enter only numbers" 
  }
  else{

    const result= parseInt(val1) + parseInt(val2);//convert the input values to numbers
    console.log(result);
    answer.textContent="the answer is " + result;
  }
});



