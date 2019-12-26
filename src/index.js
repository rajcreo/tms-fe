import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

class MainApp extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="*" render={(props) => <App {...props} />} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<MainApp />, document.getElementById('root'));
