import React,{useState} from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import RegisterFields from './register'
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs'
import Paper from '@material-ui/core/Paper'
import Tab from '@material-ui/core/Tab'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import LoginSignup from './firstComponent'

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },

  }));  


  export default function FirstPage(){
      const theme = useTheme();
      return(
          <Grid container direction ='row' justify = 'center' spacing = {3}>
          <Grid item xs = {7} >
          random carousal
          </Grid>

          <Grid item xs={5} style={{ paddingTop: theme.spacing(6) }}>
          <LoginSignup />
              </Grid>
          </Grid>
      );
  }

