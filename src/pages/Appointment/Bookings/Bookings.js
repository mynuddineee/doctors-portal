import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking, date, setBookingSuccess }) => {

    const {name, time, space} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{ py: 5 }}>
                <Typography variant="h5" sx={{ color: 'info.main', fontWeight: '600' }} gutterBottom component="div">
                        {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                        {time}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                        {space} Spaces Available
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
                </Paper>
                  
            </Grid>
            <BookingModal
                date ={date}
                booking ={booking}
                openBooking={openBooking}
              handleBookingClose ={handleBookingClose}
              setBookingSuccess = {setBookingSuccess}
            >
            
            </BookingModal>
        </>
        
    );
};

export default Bookings;