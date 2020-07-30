import React,{Component} from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

class App extends Component {

  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault();
    console.log('potwierdzony form');
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=efa2ef11f117f7485b2fca8e87a3a2f5&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString();
      this.setState(prevState => ({
        err: false,
        date: time,
        city: prevState.value,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
      }))
    })
    .catch(err => {
      console.log(err)
      this.setState(prevState => ({
        err: true,
        city: this.state.value
      }))
    })

  }

   

  render(){
  return (
    <div className="App">
      <Form 
      value={this.state.value}
       change={this.handleInputChange}
       submit={this.handleCitySubmit}
       />
      <Result weather={this.state}/>
    </div>
  );
  }
}

export default App;
