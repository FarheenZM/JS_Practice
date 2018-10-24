import React, {Component} from 'react'
import './weather.css'

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
    const div1 = document.getElementById('todays-weather'); //div from home.js

    const temp = document.getElementById('todays-temp');
    temp.innerText = data.main.temp + '\xB0C';// '\xB0C' used to display degree celcius symbol

    const detaildate = document.getElementById('todays-detaildate');
    detaildate.innerText = data.weather[0].main + "\n" + new Date(data.dt*1000);
        // var dt = new Date();

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var row1 = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cellText1 = document.createTextNode("Humidity");
    var cell2 = document.createElement("td");
    var cellText2 = document.createTextNode(data.main.humidity + '%');

    var row2 = document.createElement("tr");
    var cell3 = document.createElement("td");
    var cellText3 = document.createTextNode("Min Temp");
    var cell4 = document.createElement("td");
    var cellText4 = document.createTextNode(data.main.temp_min + '\xB0C');

    var row3 = document.createElement("tr");
    var cell5 = document.createElement("td");
    var cellText5 = document.createTextNode("Max Temp");
    var cell6 = document.createElement("td");
    var cellText6 = document.createTextNode(data.main.temp_max + '\xB0C');

    var row4 = document.createElement("tr");
    var cell7 = document.createElement("td");
    var cellText7 = document.createTextNode("Sunrise");
    var cell8 = document.createElement("td");
    var cellText8 = document.createTextNode(new Date(data.sys.sunrise*1000));

    var row5 = document.createElement("tr");
    var cell9 = document.createElement("td");
    var cellText9 = document.createTextNode("Sunset");
    var cell10 = document.createElement("td");
    var cellText10 = document.createTextNode(new Date(data.sys.sunset*1000));

    cell1.appendChild(cellText1);
    row1.appendChild(cell1);
    cell2.appendChild(cellText2);
    row1.appendChild(cell2);

    cell3.appendChild(cellText3);
    row2.appendChild(cell3);
    cell4.appendChild(cellText4);
    row2.appendChild(cell4);

    cell5.appendChild(cellText5);
    row3.appendChild(cell5);
    cell6.appendChild(cellText6);
    row3.appendChild(cell6);

    cell7.appendChild(cellText7);
    row4.appendChild(cell7);
    cell8.appendChild(cellText8);
    row4.appendChild(cell8);

    cell9.appendChild(cellText9);
    row5.appendChild(cell9);
    cell10.appendChild(cellText10);
    row5.appendChild(cell10);

    tblBody.appendChild(row1);
    tblBody.appendChild(row2);
    tblBody.appendChild(row3);
    tblBody.appendChild(row4);
    tblBody.appendChild(row5);

    tbl.appendChild(tblBody);

    div1.appendChild(temp);
    div1.appendChild(detaildate);
    div1.appendChild(tbl);

    // tbl.setAttribute("border", "1");
  }

  componentDidMount(){
    const url = 'http://api.openweathermap.org/data/2.5/weather/?id=8131498&APPID=4add85c57739b740cb435a6436e07a19&units=metric';
    this.makeRequest(url, this.requestComplete);
  }

  render(){
    return(
      <React.Fragment>
        <div id='weather-images'>
          <img src="https://openweathermap.org/img/w/01d.png"/>
          <img src="https://openweathermap.org/img/w/02d.png"/>
          <img src="https://openweathermap.org/img/w/03d.png"/>
          <img src="https://openweathermap.org/img/w/04d.png"/>
        </div>

        <h1 id="todays-temp"></h1>
        <div id="todays-detaildate"></div>
      </React.Fragment>
    )
  }
}

export default Weather;
