import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { styleObject } from '../utils/globalConsts';
import PredictionChart from '../components/PredictionChart'
import TopDevices from '../components/TopDevices'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <Box sx={{ styleObject, marginLeft: "10rem" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <Item><PredictionChart /></Item>
          </Grid>
          <Grid item md={4} xs={12}>
            <Item><TopDevices /></Item>
          </Grid>
          <Grid item md={6} xs={12}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item md={6} xs={12}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
