import React, { useEffect, useState } from 'react';
import millify from 'millify';
import Loader from '../Loader/Loader';
import { Card, Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';

const Cryptocard= ({cryptos}) => {
  return (
    <div className='Crytocard-top' style={{marginTop:"2%",}}>
        <Row gutter={[32, 32]} className="crypto-card-container" >
            {cryptos?.map((currency) => (
            <Col
                xs={24}
                sm={12}
                lg={6}
                className="crypto-card"
                key={currency.uuid}
            >

                {/* Note: Change currency.id to currency.uuid  */}
                <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                <Card
                    style={{
                        borderRadius:"8px",
                        fontSize:"14px",
                        color:"rgb(15,15,15)",
                        }}
                    title={`${currency.rank}. ${currency.name}`}                    
                    extra={<img className="crypto-image" src={currency.iconUrl} />}

                    hoverable
                >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {currency.change}%</p>
                </Card>
                </Link>
            </Col>
            ))}
        </Row>
        
    </div>
)}
export default  Cryptocard;
       
          