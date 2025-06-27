'use client'

import { AppBar, Box, Button, IconButton, ImageList, ImageListItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { Photos } from './Photos';

export default function Page() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            Photo Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <Photos />
    </Box>
  );
}
