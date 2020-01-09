import React,{useState, useDebugValue} from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
    image: {
        height: '100%',
        width: '100%',
        display: 'fill',
        borderRadius: theme.spacing(2)
    },
}))


export default function AboutPage(){
    const classes = useStyles();
    return(
    <div className ={classes.root} >
        <Paper>
            <Typography variant='h6' component='div' gutterBottom> This is the about page</Typography>
            </Paper>
    </div>
    );
}