import React, { Component } from 'react';
import Axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      counter: 0,
    };
    console.log('I am constructor');
  }

  componentDidMount() {
    console.log('I am cdm');
    this.setState({ loading: true });
    const _this = this;

    Axios.get('http://localhost:3000', { headers: { crossdomain: true } })
      .then(function (response) {
        // handle success
        // setTimeout(() => {
        // }, 7000);
        _this.setState({ loading: false });
        console.log('response', response);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }

  render() {
    const { loading, counter } = this.state;
    console.log('I am render:::', counter);
    return (
      <div style={{ textAlign: 'center' }}>
        <h3>I am home</h3>
      </div>
    )
  }
}

export default Home;

