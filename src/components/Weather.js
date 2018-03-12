import React from "react";

class Weather extends React.Component {
    render() {
        return (
<div className="weather_info">

        {
            this.props.City && this.props.State && <p className="weather__key" ><span>{this.props.City}, {this.props.State}, {this.props.Country}</span></p>
        }

        {
            this.props.temperature && <p className="weather__key">
                Temperature:
                <span className="weather__value">
                      {this.props.temperature}
                </span>
           </p>
        }
        {
            this.props.feels_like && <p className="weather__key">
            Feels Like:
            <span className="weather__value">
               {this.props.feels_like}
            </span>
            </p>
        }

        {
            this.props.local_time &&  <p className="weather__key">
            Local Time:
            <span className="weather__value">
                  {this.props.local_time}
            </span>
            </p>
        }
        {
            this.props.wind && <p className="weather__key">
            Wind Intensity:
            <span className="weather__value">
                  {this.props.wind}
            </span>
            </p>
        }
        {
            this.props.icon && <p className="weather__key">
            Weather:
            <span className="weather__value">
                {this.props.icon}
            </span>
            </p>
        }
        {
            this.props.error && <p>
            <span className="weather__error">
                 {this.props.error}
            </span>
            </p>
        }
        {
            this.props.icon_url && <img src={this.props.icon_url}/>
        }


</div>
            );
    }
};


// const Weather = props => (
// <div>

//         { props.City && props.State && <p>{props.City}, {props.State}, {props.Country}</p>}

//         {props.temperature && <p>Temperature: {props.temperature}</p>}
//         {props.feels_like && <p>Feels Like: {props.feels_like}</p>}

//         {props.local_time &&  <p>Local Time: {props.local_time}</p>}
//         {props.wind && <p>Wind Intensity: {props.wind}</p>}
//         {props.icon && <p>Weather: {props.icon}</p>}
//         {props.error && <p>{props.error}</p>}
//         {props.icon_url && <img src={props.icon_url}/>}


// </div>
//             );


export default Weather

