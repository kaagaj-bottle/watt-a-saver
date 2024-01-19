import React from 'react';
import { Button, Typography, Container, AppBar, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { greenAccent } from '../utils/globalConsts';
const Home = () => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{

          backgroundColor: greenAccent,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Toolbar>
          <Typography variant="h6">Watt-a-Saver</Typography>
        </Toolbar>
        <Box sx={{
          width: '200px',
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: '1rem'
        }}>
          <Button
            component={Link}
            to={"/login"}
            variant="contained"
            color="primary"
            style={{ backgroundColor: greenAccent }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to={"/signup"}
            variant="contained"
            color="primary"
            style={{ backgroundColor: greenAccent }}
          >
            Sign Up
          </Button>
        </Box>
      </AppBar>
      <Container>
        <Typography variant="h2" style={{ color: greenAccent, marginTop: '50px' }}>
          Welcome to Our Website
        </Typography>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          We offer amazing products and services to make your life better.
        </Typography>



      </Container>
    </div>
  );
};

export default Home;

