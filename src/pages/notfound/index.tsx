import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.scss';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='center_flex_col'>
      <span className='notfound404'>404</span>
      <span className='tip_font_color'>您访问的页面不存在哦</span>
      <span className='antd_a_style' onClick={() => navigate('/')}>
        返回首页
      </span>
    </div>
  );
};

export default NotFound;
