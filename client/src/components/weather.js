import React, {Component} from 'react'

class Weather extends Component{

  makeRequest(url, callback){

    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', callback);
    request.send();
  }

  requestComplete(){

    if(this.status !== 200) return;
    const jsonString = this.responseText;
    const data = JSON.parse(jsonString);
    // console.log(data);
    const div = document.getElementById('todays-weather');

    const para = document.getElementById('weather-para');
    para.innerText = data.weather[0].description + " , Temp: " + data.main.temp + " , Humidity: " + data.main.humidity + " , Min: " + data.main.temp_min + " , Max: " + data.main.temp_max;

    div.appendChild(para);

  }

  componentDidMount(){
    const url = 'http://api.openweathermap.org/data/2.5/weather/?id=8131498&APPID=4add85c57739b740cb435a6436e07a19&units=metric';
    this.makeRequest(url, this.requestComplete);
  }

  render(){
    return(
      <p id="weather-para"></p>
    )
  }
}

export default Weather;
