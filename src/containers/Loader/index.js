import React from 'react';
import { Spinner } from 'reactstrap';
import { COLOR } from './../../constants';

export default function Loader() {
  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%', textAlign: 'center', display: 'table', color: COLOR.PRIMARY_ALT }}>
      <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <Spinner style={{ width: '80px', height: '80px' }} />
        <br />
        <p>Please hold tight while we load...</p>
      </div>
    </div>
  )
}
