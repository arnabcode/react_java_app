import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

const Title_bar = () =>(
<div className="title_bar">
<h3> Sign up</h3>
</div>

);

class Form extends Component{
  state={
    name:"",
    password:"",
    phone:""
  };
  

   handleClick = (event) => {
    event.preventDefault();
  
    const payload ={
      username: this.state.name,
      password: this.state.password,
      phone: this.state.password
    }
  
    console.log(payload);
  }

  nameref = React.createRef();
  render(){
    return(
<div className ="form">
<input 
className ="input"
type ="text"
value={this.state.name}
onChange ={(event)=>this.setState({name :event.target.value})}
//ref={this.nameref}
placeholder="Enter your Name"
required
/>
<br />
<input 
className ="input"
type ="password"
value={this.state.password}
onChange ={(event)=>this.setState({password :event.target.value})}
placeholder="Enter password"
required
/>
<br />
<input 
className ="input"
type ="text"
value={this.state.phone}
onChange ={(event)=>this.setState({phone :event.target.value})}
placeholder="Enter phone Number"
required
/>
<div className="buttonName">
    <button 
    className="submit_button"
    onClick={(event)=>this.handleClick  (event)} >
      Submit
    </button>
  </div>
</div>
    );
  }
}





class Loginpage extends React.Component{
  
  render(){
    return(
<div className = "Container">
<Title_bar />
<Form />

</div>
    );
  }
}


export default Loginpage;