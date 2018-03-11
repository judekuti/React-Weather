import React from "react";
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_Key = "5e1f89fe4ed775b4"


class App extends React.Component {

    getWeather = async (e) =>{
        // Prevent full page refresh
        e.preventDefault();
        const api_call = await fetch(`http://api.wunderground.com/api/${API_Key}/conditions/q/TX/Dallas.json `);
        const data = await api_call.json();
        console.log(data);
    }
    render(){
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather />

            </div>
            );
    }
}

export default App;
