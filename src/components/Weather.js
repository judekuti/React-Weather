import React from "react";

class Weather extends React.Component {
    render() {
        return (
<div>

        { this.pros.City && this.props.State && <p>{this.props.City}, {this.props.State}, {this.props.Country}</p>}

        { this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        { this.props.feels_like && <p>Feels Like: {this.props.feels_like}</p>}

        { this.props.local_time &&  <p>Local Time: {this.props.local_time}</p>}
        { this.props.wind && <p>Wind Intensity: {this.props.wind}</p>}
        { this.props.icon && <p>Weather: {this.props.icon}</p>}
        <img src={this.props.icon_url}/>

</div>
            );
    }
};

export default Weather

