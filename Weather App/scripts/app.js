const cityForm =document.querySelector('form');//getting the form element
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');


const updateUI=(data)=>{

    const cityDets=data.cityDets;// get the cityDets property from the objec in  updateCity
    const weather=data.weather;

    //update details template
    details.innerHTML=`
    <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
              </div>
    `;

    //update night and day icon images
    // const iconSrc=`img/icons/${weather.WeatherIcon}.svg`;
    // icon.setAttribute('src',iconSrc);

    let timeSrc=null;
    if(weather.IsDayTime){
        timeSrc="img/day.svg";
    }
    else{
        timeSrc="img/night.svg";
    }
    time.setAttribute('src',timeSrc)
    
    



    ///remove d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

const updateCity= async(city)=>{
   //the city details
    const cityDets= await getCity(city);//objects  of the city
    const weather = await getWeather(cityDets.Key);

    return {cityDets:cityDets,
             weather:weather// we can use shorthand notation and use only weather
            }

}


cityForm.addEventListener('submit',e=>{
    //prevent default action
    e.preventDefault();

    //get city value
    const city= cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data=> updateUI(data))
    .catch(err=>console.log(err));

})
