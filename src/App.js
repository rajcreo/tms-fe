import React, { Component } from 'react';
import { isEmpty, get } from 'lodash';
import Axios from 'axios';
import Layout from './containers/Layout';
import publicRoutes from './routes/PublicRoutes';
import privateRoutes from './routes/PrivateRoutes';
import Loader from './containers/Loader';
import AppRoutes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    // localStorage.setItem('token', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJvaGl0IiwiZW1haWwiOiJyb2hpdEByb2hpdC5jb20iLCJjaXR5Ijoia29sa2F0YSIsImlhdCI6MTU3NzI1NDg3OCwiZXhwIjoxNTc3Mjk4MDc4LCJhdWQiOiJodHRwOi8vcm9oaXRzaGFybWEueHl6IiwiaXNzIjoiUm9oaXQgU2hhcm1hIiwic3ViIjoicHVibGljIn0.B78BQqa4CcNZp6kR9pWw7nFHp_asGi6g4PAmMCMToOfVT4ixi1d7oLSIbotFCVCATVNSvQU5pauO8nTbaZNJ6A');
    // localStorage.setItem('token', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJvaGl0IiwiZW1haWwiOiJyb2hpdEByb2hpdC5jb20iLCJjaXR5Ijoia29sa2F0YSIsImlhdCI6MTU3NzM0MjE4NCwiZXhwIjoxNTc3Mzg1Mzg0LCJhdWQiOiJodHRwOi8vcm9oaXRzaGFybWEueHl6IiwiaXNzIjoiUm9oaXQgU2hhcm1hIiwic3ViIjoicHVibGljIn0.NpU8XzWXd9jA7UXo-E7MXBGJxK6KNhyd1a7KDqcG7tS55QJio5QPc0UDgn4i7smC_xH7056Xv2v2vkSEzIA4DA');
    this.state = {
      loading: true,
      token: localStorage.getItem('token'),
      user: JSON.parse(localStorage.getItem('user')),
    };
    // localStorage.setItem('token', '');
  }

  componentDidMount() {
    const { token, user } = this.state;
    console.log('token:::::', this.props);
    const path = get(this.props, 'location.pathname', null);
    // cosnole
    if(token && path==='/login') window.location.href = '/';
    else if (!token) {
      this.setState({
        loading: false,
        user: null,
      });
    } else if (!user) {
      const _this = this;
      Axios.post('http://localhost:3000/authenticate', { token })
        .then(function (response) {
          const user = get(response, 'data.data.user');
          const errMsg = get(response, 'data.message');
          console.log('user:::L', user);
          if (user) {
            _this.setState({ loading: false, user });
            localStorage.setItem('user', JSON.stringify(user));
          } else {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            window.location.href = '/login';
            // alert(`error: ${errMsg}`);
          }
        })
    } else this.setState({ loading: false });
  }

  render() {
    const { user, loading } = this.state;
    console.log('user', user);
    return (
      loading ? <Loader /> : <Layout {...this.props} user={user}><AppRoutes {...this.props} user={user} /></Layout>
    )
  }
}

export default App;
