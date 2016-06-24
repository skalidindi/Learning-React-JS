import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const id = cityData.city.id;
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={ id }>
        <td>{ name }</td>
        <td><GoogleMap lon={ lon } lat={ lat } /></td>
        <td><Chart data={ temps } color="orange" units="K" /></td>
        <td><Chart data={ pressures } color="green" units="hPa" /></td>
        <td><Chart data={ humidities } color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hovor">
        <thead>
          <tr>
            <th>City</th>
            <th>Location</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

WeatherList.propTypes = { weather: React.PropTypes.array };

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps, null)(WeatherList);
