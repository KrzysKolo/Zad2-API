import React from 'react';
import loading from './../img/loading.gif';

const Loading = () => {
  return (
    <div className="loading-page">
			<img src={loading} style={{width: 200, margin: 'auto', display: 'block'}} alt="Loading"/>
    </div>
  )
}

export default Loading;
