import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointmentBg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {

    background: `url(${appointmentBg})`,
    backgroundColor: 'rgba(45,58,74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 130,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img 
                style={{ width: 400, marginTop: -110 }}
                src={doctor} alt=""/>
            </Grid>
            <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-start',  textAlign: 'left', alignItems: 'center' }}>
                <Box>
                    <Typography variant="h5" sx={{my:5}} style={{ color: "#6DC4B3 "}}>
                    APPOINTMENT

                    </Typography>
                    <Typography variant="h4" sx={{mb:5}} style={{ color: 'white' }}>
                    Make an appointment Today

                    </Typography>
                    <Typography variant="h6" sx={{mb:5}} style={{ color: 'white', fontSize: 12, fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies elit ut nisl varius ullamcorper. Sed at porta urna, vitae convallis lectus

                    </Typography>

                    <Button variant="contained" style={{ backgroundColor: "#6DC4B3 "}}>Learn More</Button>
                </Box>
                
                
            </Grid>
            
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;