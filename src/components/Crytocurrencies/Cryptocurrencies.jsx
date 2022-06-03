import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import Cryptocard from '../Crptocard/Cryptocard';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import Loader from '../Loader/Loader';

const Cryptocurrencies = ({ simp}) => {
  const count = simp ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const handle = (event)=> setSearchTerm(event.target.value.toLowerCase())
  
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simp && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={handle}
            style={{borderRadius:"4px",}}
          />
        </div>
      )}
      <Cryptocard cryptos={cryptos}></Cryptocard>
    </>
  );
};

export default Cryptocurrencies;
