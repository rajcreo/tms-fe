import React, { Component } from 'react'

class Layout extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <div style={{ background: 'red', height: '30px', width: '100%' }}></div>
        {children}
        <div style={{ background: 'blue', height: '30px', width: '100%' }}></div>
      </div>
    )
  }
}

export default Layout;
