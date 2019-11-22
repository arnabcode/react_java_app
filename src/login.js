import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      border: 2 +'px',
      borderStyle: 'solid',
      float: 'right',
      marginRight: theme.spacing(10),
      marginTop: theme.spacing(10),
      paddingBottom: 20 + 'px',
  
  
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
      margin: 'auto',
      marginLeft: theme.spacing(20),
      marginRight: theme.spacing(2),
    },
  }));
  

  const sendRequest = async (payload) => {
    let basicAuth = 'Basic ' + btoa(payload.username + ':' + payload.password);
    //console.log(basicAuth);
    const response = await Axios.post('http://localhost:5000/users/auth',{payload},{
      headers: {'Authorization': basicAuth}
    });
          
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
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          
          <br />
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
          <br />
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
  
          
          <br />
          
          <Button 
          variant="contained" 
          color="primary" 
          className={classes.button}
          onClick={ (event) => handleClick (event) }>
            Submit
          </Button>
        </div>
      </form>
    );
  }


  export default LoginFields;