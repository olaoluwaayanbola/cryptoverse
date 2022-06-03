import React from 'react';
import { Spin } from 'antd';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => (
  <div className="loader">
      <CircularProgress color="success" />
  </div>
);

export default Loader;
