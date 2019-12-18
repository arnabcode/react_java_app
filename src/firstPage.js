import React,{useState} from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import LoginSignup from './firstComponent'
import Carousel from 'react-material-ui-carousel'
import Link from '@material-ui/core/Link'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'


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
    carousal:{
        height: 2500 + 'px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        
      },
      title: {
        flexGrow: 1,
      },
      navpills:{
          padding : theme.spacing(1),
          margin: theme.spacing(3)
      },
      toolbar:{
          alignContent: 'center'
      }

  }));  

  const Item = (props) => {
      const classes = useStyles();
      return(
          <Paper  elevation={2}>
            <img src= {props.item.src} className={classes.image}/>
            <Typography variant='caption'>{props.item.description}</Typography>
              </Paper>
      );
  }

const CarousalComponent = () => {
    const classes = useStyles();
    var items = [
        {
            src: image1,
            description: "Hi and welcome"
        },
        {
            src: image2,
            description: "Do you like this?"
        },
        {
            src: image3,
            description: "I like this !!!"
        }
    ]
    return(
        <Grid item xs>
        <Carousel animation='fade' interval ={3000} style ={classes.carousal}> 
            {
                items.map( item => 
                    <Item item={item} />
                )
            }
        </Carousel>
    </Grid>
    );
}
  export default function FirstPage(){
      const theme = useTheme();
      const classes = useStyles();
      return(
          <Grid container direction ='row' justify = 'space-around' spacing = {5}>
          
          <AppBar position="relative" color="inherit">
          <br />
        <Toolbar className={classes.toolbar}>
        
        <Grid container direction ='row' justify = 'space-around' spacing = {5}>
          <Paper elevation={4} className={classes.navpills}>
          <Link href="#"  color="black" underline="hover" variant="body1" >
            About Developer
          </Link>
          </Paper>
          <Paper elevation={4} className={classes.navpills}> 
          <Link href="#"  color="black" underline="hover" variant="body1" >
          Services
          </Link>
          </Paper>
          <IconButton edge="false" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon style={{ fontSize:70 + 'px', border: 1+ 'px',
        borderColor: 'black' }}/>
          </IconButton>
          <Paper elevation={4} className={classes.navpills}> 
          <Link href="#"  color="black" underline="hover" variant="body1" >
          Contact Page
          </Link>
          </Paper>
          <Paper elevation={4} className={classes.navpills}>
          <Link href="#"  color="black" underline="hover" variant="body1" >
          New Projects
          </Link>
          </Paper>
         
         </Grid>
        </Toolbar>
      </AppBar>
          <Grid item xs = {7} style={{ paddingTop: theme.spacing(10) , paddingLeft: theme.spacing(10)}}>
          
          <CarousalComponent />
          
          </Grid>

          <Grid item xs={5} style={{ paddingTop: theme.spacing(6) }}>
          <LoginSignup />
              </Grid>
          </Grid>
      );
  }


