import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Typography.Title level={4} ><Link to="/" style={{fontSize:"25px",color:"blue"}}>BitTree.com</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
        </Button>
      </div>
      {activeMenu && (
      <Menu theme="dark" style={{fontSize:"20px", marginLeft:"10px"}} >
        <Menu.Item style={{marginBottom:"30px",borderRadius:"5px"}}icon={<HomeRoundedIcon style={{transform:"scale(2.5)",marginRight:"10px"}} />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item style={{marginBottom:"30px",borderRadius:"5px"}} icon={<CurrencyExchangeRoundedIcon  style={{transform:"scale(2.5)",marginRight:"10px"}}/>}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item style={{marginBottom:"30px",borderRadius:"5px"}} icon={<BarChartRoundedIcon  style={{transform:"scale(2.5)",marginRight:"10px"}}/>}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item style={{marginBottom:"30px",borderRadius:"5px"}} icon={<NewspaperIcon style={{transform:"scale(2.5)",marginRight:"10px"}}/>}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
      )}</div>
  );
};

export default Navbar;
