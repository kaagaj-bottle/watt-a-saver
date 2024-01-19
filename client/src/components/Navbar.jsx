import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import { Link } from 'react-router-dom';

import { pages, drawerWidth } from '../utils/globalConsts'

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>

      <List>
        {pages.map((page) => {
          return <ListItem key={page.id} disablePadding>
            <ListItemButton
              component={Link}
              to={page.route}
              sx={{
                textAlign: 'center'
              }}
            >
              <ListItemText primary={page.label} />
            </ListItemButton>

          </ListItem>
        })}
      </List>
    </Box>
  );


  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', border: 'none' }}>
        <AppBar
          position='sticky'
        >
          <Toolbar
            sx={{
              display: { sm: 'none' }
            }}
          >
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant='h6' noWrap component='div'> */}
            {/*   Zishan Siddique */}
            {/* </Typography> */}
          </Toolbar>
        </AppBar>

        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth}px` },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='persistent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth - 100}px` },
          }}
          open
        >
          {drawer}
        </Drawer>

      </Box>
    </>
  );
}


export default Navbar;


