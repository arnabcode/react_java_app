import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { fontSize } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    margin: theme.spacing(3),
   // paddingLeft: theme.spacing(7),
    float:"left"
  },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1,
      padding: theme.spacing(2),
      marginTop: theme.spacing(5),
      marginRight: theme.spacing(5)
  
  
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
     marginBottom: theme.spacing(2),
      width: 400 +'px',
      
    },
    
    button: {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(20),
      marginRight: theme.spacing(2),
    },
    divider:{
      height: 30 +"px",
      border : 1 +"px",
      width: 1+ "px",
      backgroundColor: "black",
      borderColor: "black"

    }
  }));
  

  const sendRequest = async (payload) => {
   // let basicAuth = 'Basic ' + btoa(payload.username + ':' + payload.password);
    let basicAuth = '247213da688a2558b805db784978ed6f' ;
    //console.log(basicAuth);
    const response = await Axios.get('http://localhost:5065/mds/v1/domains',
    {
      headers: {
        'Authorization': basicAuth,
        'Content-Type':'application/json'
      }
    }
    );
          
    console.log(response)
  } 

  
const LoginFields = () => {
    const classes = useStyles();

  const [value, setValue] = useState({
    email: '',
    password: ''
  })
  
  const { email, password } = value;
    const  handleClick = (event) => {
      event.preventDefault();
    
      const payload ={
        "username": email,
        "password": password   
          }
      sendRequest(payload);
      console.log(payload);
  
      //keep validation function
    }
    
    function handleChange(e) {
      setValue({
        ...value,
        [e.target.name]: e.target.value
      });
    }
  
    return (
      <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          spacing ={2}

          className={classes.container}
        >
      <form  noValidate autoComplete="off">  
          <Grid item xs>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            label="Username"
            margin="normal"
            variant="outlined"
            value={email}
            name="email"
            onChange ={handleChange}
          />

        </Grid>
       
        <Grid item xs>
         
          <TextField
            id="outlined"
            className={classes.textField}
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange ={handleChange}
          />
  
          </Grid>
          <br />
          
          <Button  variant="contained" color="primary" className={classes.button} onClick={ (event) => handleClick (event) }>
            Submit
          </Button>
          <br />
          <br />
          <Grid container direction="row" justify="center"
          alignItems="center"
          spacing ={3}>
          
          <Grid item>
              <Link href="#"  underline="hover" color="secondary" variant="h6">
                             Forgot Password?
                         </Link>
          </Grid> 

              <Grid item>
                         <div className ={classes.divider}></div>
              </Grid>

               <Grid item>
              <Link href="#"  color="primary" underline="hover" variant="h4">
                                Signup
                </Link>
                  </Grid>
                            
             
          </Grid>
        
      </form>
      </Grid>
    );
  }


  export default LoginFields;