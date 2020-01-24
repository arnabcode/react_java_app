import React,{useState, useDebugValue} from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper'
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link'
import FirstPage from './firstPage'
import AboutPage from './aboutPage'
import Login from './login'
import AuthenticatedRoute from './AuthenticatedRoute'

var test = < br />;
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
        height: 2300 + 'px'
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
          
      }

  }));  



export default function HomePage(){
    
    const classes = useStyles();
const [state,setState] = useState('hidden');
    function loadFirstPage(){
        (state == 'hidden')?setState('visible'):setState('hidden');
console.log(state);
    }

    
    return(
      <Router>
        <div>
<AppBar position="relative" color="inherit">
          <br />
        <Toolbar className={classes.toolbar}>
        
        <Grid container direction ='row' justify = 'space-around' spacing = {5}>
          <Paper elevation={1} className={classes.navpills}>
          <Link href="/about"  color="black" underline="hover" variant="body1" >
            About Developer
          </Link>
          </Paper>
          <Paper elevation={1} className={classes.navpills}> 
          <Link href="#"  color="black" underline="hover" variant="body1" >
          Services
          </Link>
          </Paper>
          <IconButton edge="false" className={classes.menuButton} color="inherit" aria-label="menu" onClick={loadFirstPage}>
            <Link href="/">
            <HomeIcon style={{ fontSize:70 + 'px', border: 1+ 'px',
        borderColor: 'black' }}/>
        </Link >
          </IconButton>
          <Paper elevation={1} className={classes.navpills}> 
          <Link href="#"  color="black" underline="hover" variant="body1" >
          Contact Page
          </Link>
          </Paper>
          <Paper elevation={1} className={classes.navpills}>
          <Link href="#"  color="black" underline="hover" variant="body1" >
          New Projects
          </Link>
          </Paper>
        
         </Grid>
        </Toolbar>
      </AppBar>
      
      <Switch>
      
      <Route exact path='/' component={FirstPage} />
      <Route exact path='/login' component={Login} />
      <AuthenticatedRoute exact path='/about' component={AboutPage} />
      </Switch>
      
      </div>
      
      </Router>
      );

}