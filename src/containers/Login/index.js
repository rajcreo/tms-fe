import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'gray', height: 'auto', width: '50%', textAlign: 'center', padding: '30px' }}>
            First name: <input type="text" name="fname"></input><br></br>
            Last name: <input type="text" name="lname"></input><br></br>
            <input type="submit" value="Submit"></input>
          </div>
          {/* {loading ? 'Loading....' : 'Not Loading!'} */}
          <h3>{123}</h3>
        </div>
      </div>
    )
  }
}
