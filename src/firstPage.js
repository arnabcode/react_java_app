import React,{useState} from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import LoginSignup from './firstComponent'


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
        marginTop: theme.spacing(0),
        
      },
      title: {
        flexGrow: 1,
      },
      navpills:{
          padding : theme.spacing(1),
          margin: theme.spacing(3),
          width: theme.spacing(25),
          textAlign: 'center'
      },
      toolbar:{
          alignContent: 'center',
          marginTop: theme.spacing(1)
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
        <Grid container direction ='row' justify = 'space-around' spacing = {2}>
          
          
          <Grid item xs={7} style={{ paddingTop: theme.spacing(5) , paddingLeft: theme.spacing(2)}}>
          
          <CarousalComponent />
          
          </Grid>

          <Grid item xs={4} style={{ paddingTop: theme.spacing(3) }}>
          <LoginSignup />
              </Grid>
          </Grid>
      );
  }


