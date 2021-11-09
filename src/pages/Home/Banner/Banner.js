import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography, Box } from '@mui/material';


const bannerBg = {

    background : `url(${bg})`,
    
}

const verticalCenter = {

    display : 'flex',
    height : 450,
    alignItems : 'center',
    
}

const Banner = () => {
    return (
        
               <Container style ={bannerBg} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item style={{...verticalCenter, textAlign: 'left'}} xs={12} md={6}>
                            <Box>
                            <Typography variant="h3">
                                Your New Smile <br/>
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{fontSize:13, my:5,fontWeight:300, color: 'gray'}}>
                                Nunc a urna iaculis, viverra risus id, dictum risus. Proin id vulputate elit. Phasellus imperdiet mollis augue, at hendrerit mi dictum ac. Fusce porta aliquet purus
                            </Typography>
                            <Button  variant="contained" style={{ backgroundColor: "#6DC4B3 "}}>Get Appointment</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} style={verticalCenter}>
                            <img style={{width: '300px'}} src={chair} alt=""/>
                        </Grid>
                        
                    </Grid>
                </Container>
        
    );
};

export default Banner;