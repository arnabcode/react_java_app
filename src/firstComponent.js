import React,{useState} from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import RegisterFields from './register'
import LoginFields from './login'
import Tabs from '@material-ui/core/Tabs'
import Paper from '@material-ui/core/Paper'
import Tab from '@material-ui/core/Tab'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      
    },
  }));  


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };


const LoginSignup = () =>{

    const [value, setValue] = useState(0);

    const handleChange =(event, newValue)=>{
       setValue(newValue);
   }

const classes = useStyles();
const theme = useTheme();
   
        return(
           
            <Grid container >
            <Grid item xs>
            <AppBar position="static" color="default">
    <Tabs
    value={value}
    onChange={handleChange}
    variant="fullWidth"
    indicatorColor="secondary"
    >
        <Tab label ="LOG IN" index = {0}/>
        <Tab label ="SIGN UP" index = {1}/>
        </Tabs>
        </AppBar>
        <Paper>
        <TabPanel value={value} index={0} dir={theme.direction} >
        <LoginFields />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        
        <RegisterFields /> 
        </TabPanel>
        
        </Paper>
        </Grid>
        </Grid>
            
    

    
   

        );
    }



export default  LoginSignup;