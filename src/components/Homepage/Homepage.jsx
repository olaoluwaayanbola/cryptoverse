import './Homepage.css'
import News from '../News/News';
import millify from 'millify';
import Loader from '../Loader/Loader';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Cryptocurrencies from '../Crytocurrencies/Cryptocurrencies';
import { useGetCryptosQuery } from '../../services/cryptoApi';
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return <Loader />;

  return (
    <div className='Home_Container'>
      <div className="Title">
        <h2>Global Crypto Information</h2>
      </div>
      <Grid container spacing={2} columns={16} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={16} md={8}  lg={4}>
              <div className="card-info">
                <h3>Total Cryptocurrencies</h3>
                <span>
                 
                </span>
              </div>
          </Grid>
          <Grid item xs={16} md={8} lg={4}>
              <div className="card-info">
                <h3>Total Exchanges</h3>
                <span>{millify(globalStats.totalExchanges)}</span>
              </div>
          </Grid>
          <Grid item xs={16} md={8} lg={4}>
              <div className="card-info">
                <h3>Total Market Capital</h3>
                <span>{`$${millify(globalStats.totalMarketCap)}`} </span>
              </div>
          </Grid>
          <Grid item xs={16} md={8} lg={4}>
              <div className="card-info">
                <h3>Total 24h Volume</h3>
                <span>{`$${millify(globalStats.total24hVolume)}`}</span>
              </div>
          </Grid>
      </Grid>
      <Grid container spacing={2} columns={16} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item className='CryptocurrenciesBox'>
        <Cryptocurrencies simp = {true}  />
        </Grid>
        <span className='Show'>
          <Link to="/cryptocurrencies" className='Show'>Show more</Link>
        </span>
      </Grid>
      <News simplified />
    </div>
  );
};

export default Homepage;
