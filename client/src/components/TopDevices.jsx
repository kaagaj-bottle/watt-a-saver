import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { topThree, bottomThree } from '../utils/globalConsts';
import { useEffect, useState } from 'react';
const Item = styled(Paper)(({ theme, color }) => ({
  backgroundColor: color,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: "8rem",
  height: "6rem"
}));

export default function FullWidthGrid() {
  const [isHigh, setIsHigh] = useState(true)
  const [devices, setDevices] = useState([])
  const checkColor = () => {
    if (isHigh) {
      return "#FF474D"
    } else {
      return 'green'
    }

  }
  useEffect(() => {
    if (isHigh) {
      setDevices(topThree)
    } else {
      setDevices(bottomThree)
    }
  })
  console.log(topThree)
  return (
    <Box >
      <Grid container spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {devices.map((item) => {
          return (<Grid item sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}  >
            <Item color={checkColor()} >{item.name}</Item>
          </Grid>)
        })}
      </Grid>
    </Box>
  );
}

