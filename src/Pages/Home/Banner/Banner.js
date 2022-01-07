import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography , Button , Box} from '@mui/material';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'


const bannerBg = {
  background: `url(${bg})`,
  marginTop: 15
}
const verticalCenter= {
  display: 'flex',
  alignItems: 'center',
  height: 400,
}

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{...verticalCenter, textAlign:'left'}} xs={12} md={6}>
          <Box>
            <Typography variant='h3'>
            Your New Smile <br />
            Starts Here
          </Typography>
          <Typography variant='h6' sx={{fontSize:12 , fontWeight: 300, color: 'gray', my:3}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos suscipit eligendi repellat voluptate sed? Corporis dolores voluptatibus inventore magni.
          </Typography>
          <Button variant="contained" style={{backgroundColor:'#33FFE2'}}>Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
        <img style={{width: 350}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;