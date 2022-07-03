import React from 'react';
import millify from 'millify';
import {useGetCryptoExchangesQuery} from "../../services/Exchanges"
import Loader from '../Loader/Loader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Exchange.css"

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();
  console.log(data)
  if (isFetching) return <Loader />;

  return (
   <>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell><span className='MainTitle'>Rank</span></TableCell>
            <TableCell><span className='MainTitle'> Name</span></TableCell>
            <TableCell><span className='MainTitle'> Website</span></TableCell>
            <TableCell align="left"><span className='MainTitle'> 24hr Trade volume</span></TableCell>
            <TableCell><span className='MainTitle'> 24hr Trade Average</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ width: '100%', overflow: 'hidden' }}
            >
              <TableCell>{row.trust_score_rank}</TableCell>
              <TableCell component="th" scope="row" style={{marginRight:"20%"}}>
                <span className='Logoex'>
                    <img src={row.image}></img>  
                </span>
                <span className="Title">{row?.name}</span>
              </TableCell>
              <TableCell align="left"><a href={row.url} style={{color: "rgb(0, 0, 88)"}} target="_blank" rel="noreferrer" className='link'>{row.url.substring(8, 100)}</a></TableCell>
              <TableCell align="left">{millify(row.trade_volume_24h_btc)}</TableCell>
              <TableCell>{millify(row.trade_volume_24h_btc_normalized)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>
  );
};

export default Exchanges;
