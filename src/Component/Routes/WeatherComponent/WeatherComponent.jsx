import React, { Component } from 'react'

export default class WeatherComponent extends Component {
  render() {
    return (
      <div><h3>Weather Forecast</h3>
     
   
    <label>
        Add location <input type="text" value="paris"/>
    </label>
    <button>Search</button> 
    <div>
        <h2>Locations</h2>
        <table>
          <thead>
          <tr>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          <tr><td>Belfast</td></tr>
          <tr><td>New York</td></tr> 
          </tbody> 
          </table> 
          </div>
          </div>
          

    
    );
  }
}
