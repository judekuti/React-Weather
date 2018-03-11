import React from "react";

class Weather extends React.Component {
    render() {
        return (
<div>
            <h1>{this.props.temperature}</h1>
            <h2>{this.props.feels_like}</h2>
            <img src={this.props.icon_url}/>

</div>
            );
    }
};

export default Weather

