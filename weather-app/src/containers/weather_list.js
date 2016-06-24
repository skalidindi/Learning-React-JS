import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData);
    return (
      <tr key={ cityData.city.id }>
        <td>{ cityData.city.name }</td>
        <td>{ cityData.city.name }</td>
        <td>{ cityData.city.name }</td>
        <td>{ cityData.city.name }</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hovor">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
