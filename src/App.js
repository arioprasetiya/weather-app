import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import json from './new-json.json';

const API_KEY= "f298130c5f271b1c4f803b1913c50770";

const picked = json[Math.floor(Math.random() * json.length)]

class App extends React.Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: ""
  }

  async componentDidMount() {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${picked.name},${picked.country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    if (picked.name && picked.country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
        })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value"
        })
    }
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value //change this one into automated city value by calling another api
    const country = e.target.elements.country.value //change this one into automated country value by calling another api

   
  } 

  render() {
    return(
      <div className="main">
        <div className="wrapper">
          <div className="container">
            
            <h1>Hello {picked.person_name}</h1>
            <p>Current Weather Condition</p>
        
            <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;