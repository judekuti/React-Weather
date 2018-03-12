import React from "react";
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_Key = "5e1f89fe4ed775b4"


class App extends React.Component {
    state = {
        temperature: undefined,
        feels_like: undefined,
        City: undefined,
        State: undefined,
        Country: undefined,
        local_time: undefined,
        wind: undefined,
        icon: undefined,
        icon_url: undefined,
        error: undefined

    }

    getWeather = async (e) =>{
        // Prevent full page refresh
        e.preventDefault();
        const city = e.target.elements.city.value;
        const state = e.target.elements.state.value;
        const api_call = await fetch(`http://api.wunderground.com/api/${API_Key}/conditions/q/${state}/${city}.json `);
        const data = await api_call.json();
        if (city && state){
            console.log(data);
        this.setState({
            temperature: data.current_observation.temp_f,
            feels_like: data.current_observation.feelslike_f,
            State: data.current_observation.display_location.state_name,
            City: data.current_observation.display_location.city,
            Country: data.current_observation.display_location.country,
            local_time: data.current_observation.local_time_rfc822,
            wind: data.current_observation.wind_string,
            icon: data.current_observation.icon,
            icon_url: data.current_observation.icon_url,
            error: ""

        });
        } else {
            this.setState({
                temperature: undefined,
                feels_like: undefined,
                City: undefined,
                State: undefined,
                Country: undefined,
                local_time: undefined,
                wind: undefined,
                icon: undefined,
                icon_url: undefined,
                error: "Please enter the value"
            })

        }
    }
    render(){
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                            <div className="col-xs-5 title-container">
                            <Titles />
                            </div>
                            <div className="col-xs-7 form-container">
                            <Form getWeather={this.getWeather}/>
                            <Weather temperature={this.state.temperature}
                                    feels_like={this.state.feels_like}
                                    State={this.state.State}
                                    City={this.state.City}
                                    Country={this.state.Country}
                                    local_time={this.state.local_time}
                                    wind={this.state.wind}
                                    icon={this.state.icon}
                                    icon_url={this.state.icon_url}
                                    error= {this.state.error}
                                    />

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default App;
