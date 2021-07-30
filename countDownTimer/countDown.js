const days=document.querySelector("#days");
 const hours=document.querySelector("#hours");
 const minutes=document.querySelector("#minutes");
 const seconds=document.querySelector("#seconds");


 const currentYear=new Date().getFullYear();//get the current year

 const newYearTime=new Date(`January 1 ${currentYear + 1} 00:00:00`);


 //update countdown
const updateCountdowntime=()=>{
    const currentTime=new Date();
    const diff=newYearTime-currentTime;//this will be in milliseconds
    const d=Math.floor(diff/1000/60/60/24);//calculating the days
    const h=Math.floor(diff/1000/60/60)%24;//divide by 24 and get remander because some hours have already passed
    const m=Math.floor(diff/1000/60)%60;//calculating the minutes,divide by 60 to get remaining hours
   const s= Math.floor(diff/1000)%60;//calculating the seconds,divide by 60 to get remaining seconds
   days.innerHTML=d;
   hours.innerHTML =h<10? '0'+h:h ;
   minutes.innerHTML=m<10? '0'+m:m ;
   seconds.innerHTML=s<10? '0'+s:s ;
}
setInterval(updateCountdowntime,1000);
