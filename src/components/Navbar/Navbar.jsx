import React from 'react'
import "./Navbar.css";
import { Grid } from '@mui/material';
const Navbar = () => {
  return (
    <div className='Navbar_Container'>
        {/* Navbar container-grig from material ui */}
        <Grid container spacing={2} columns={16}>
            <Grid item xs={5} lg={11}>
                <div className="Logo">
                    <h2>Crypto.com</h2>
                </div>
            </Grid>
            <Grid item xs={11} lg={5}>
                <div className="Major_Info">
                    <span>
                        Loremmm:$22,330.00
                    </span>
                    <span>
                        Loremmm:$22,330.00 
                    </span>
                </div> 
            </Grid>
        </Grid>
    </div>
  )
}

export default Navbar