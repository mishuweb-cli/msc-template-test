import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const Fallback = () => {
  const Loading = <div className='fallback_box center_flex'>加载中...</div>;
  return ReactDOM.createPortal(Loading, document.body);
};

export default Fallback;
