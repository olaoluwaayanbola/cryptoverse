import React from 'react'
import { Layout, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
        <Link to="/"><br />
            BitTree.com
        </Link> <br />
            All Rights Reserved.
        </Typography.Title>
        <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
        </Space>
  </div>
  )
}

export default Footer