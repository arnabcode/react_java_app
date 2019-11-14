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
  nameField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: 190 +'px',
    
  },
  button: {
    margin: theme.spacing(1),
    margin: 'auto',
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(2),
  },
}));

const sendRequest = async (payload) => {
  const response = await Axios.post('http://localhost:5000/signup', payload);
		
  console.log(response)
} 

const InputFields = () => {
  const classes = useStyles();
const [firstName, setFirstName] = useState("");
const [lastName, setLastName]= useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

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
  

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-basic"
          className={classes.nameField}
          value={firstName}
          onChange ={(event)=>setFirstName(event.target.value)}
          label="First Name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          className={classes.nameField}
          value={lastName}
          onChange ={(event)=>setLastName(event.target.value)}
          label="Last Name"
          margin="normal"
          variant="outlined"
        />
        
        <br />
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="E-mail"
          margin="normal"
          variant="outlined"
          value={email}
          onChange ={(event)=>setEmail(event.target.value)}
        />
        <br />
        <TextField
          id="outlined"
          className={classes.textField}
          label="Password"
          margin="normal"
          variant="outlined"
          type="password"
          value={password}
          onChange ={(event)=>setPassword(event.target.value)}
        />

        <br />
        <TextField
          id="outlined"
          className={classes.textField}
          label="Confirm password"
          margin="normal"
          variant="outlined"
          type="password"
          //onChange ={}
        />
        <br />
        <TextField
          id="outlined"
          className={classes.textField}
          label="Phone"
          margin="normal"
          variant="outlined"
          value={phone}
          onChange ={(event)=>setPhone(event.target.value)}
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




export default InputFields;