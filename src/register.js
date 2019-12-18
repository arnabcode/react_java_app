import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    border: 2 +'px',
    borderStyle: 'solid',
    
    marginTop: theme.spacing(10),
    paddingBottom: 20 + 'px',


  },
  textField: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    //width: 400 +'px',
    
  },
  nameField: {
    display: 'flex',
    flexWrap: 'wrap',
   
   // width: 185 +'px',
    
  },
  button: {
   
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(2),
  },
}));

const sendRequest = async (payload) => {
  const response = await Axios.post('http://localhost:5000/signup', payload);
		
  console.log(response)
} 

const RegisterFields = () => {
  const classes = useStyles();
  const [value, setValue] = useState({
    
    firstName:'',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  })
  const { firstName,lastName,phone,email, password } = value;
  const  handleClick = (event) => {
    event.preventDefault();
  
    const payload ={
      "firstName": firstName,
      "lastName":  lastName,
      "phone" : phone,
      "email": email,
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
    <Grid container direction="column" justify="center"
    alignItems="center" spacing={2}>
    <form  noValidate autoComplete="off">
      <Grid item >
      <Grid container direction='row' spacing={1} justify = 'center'>
      <Grid item xs ={5}>
        <TextField
          id="outlined-basic"
          className={classes.nameField}
          value={firstName}
          onChange ={handleChange}
          label="First Name"
          name='firstName'
          margin="normal"
          variant="outlined"
          required
        />
        </Grid>
        <Grid item xs ={5}>
        <TextField
          id="outlined-basic"
          className={classes.nameField}
          value={lastName}
          onChange ={handleChange}
          name='lastName'
          label="Last Name"
          margin="normal"
          variant="outlined"
          required
        />
        </Grid>
        </Grid>
        </Grid>
        <Grid item xs = {12}>
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="E-mail"
          margin="normal"
          variant="outlined"
          value={email}
          name='email'
          onChange ={handleChange}
          required
        />
        </Grid>
        <Grid item xs = {12} >
        <TextField
          id="outlined"
          className={classes.textField}
          label="Password"
          margin="normal"
          variant="outlined"
          name='password'
          type="password"
          value={password}
          onChange ={handleChange}
          required
        />
        </Grid>
        <Grid item xs = {12}>
        <TextField
          id="outlined"
          className={classes.textField}
          label="Confirm password"
          margin="normal"
          variant="outlined"
          type="password"
          onChange ={handleChange}
          required
        />
        </Grid>
        <Grid item xs = {12}>
        <TextField
          id="outlined"
          className={classes.textField}
          label="Phone"
          margin="normal"
          variant="outlined"
          value={phone}
          name='phone'
          onChange ={handleChange}
          required
        />
        </Grid>
        
        <Grid item xs ={6}>
        <Button 
        variant="contained" 
        color="primary" 
        className={classes.button}
        onClick={ (event) => handleClick (event) }>
          Submit
        </Button>
      </Grid>
    </form>
    </Grid>
  );
}




export default RegisterFields;