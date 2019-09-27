import React ,{Component} from 'react';
import './FKComponent.css'
import logo from './Flipkart_logo.png'
import addbutton from './addbutton.png'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class FlipKart extends React.Component{

    state={
        clicked:false,
        pid:"",

    }
    handleClick=(event)=>{
        event.preventDefault();
        this.setState({clicked:true});
        console.log(this.state.pid);
        this.props.onAdd(this.state.pid);
        this.setState({pid : ''});

    };
    showitems=()=>{
        console.log("hello");
    };

    render(){
        return(
            <div className="flipkartDropdown">
            <div className='clickbar' onClick={this.showitems} >
            <img className="image" src={logo} alt="Flipakrt Logo" />
            <div 
            style={{ fontSize: 25 + 'px', fontStyle: 'bold', float: 'left'}}>
            Check the prices of your saved items
            </div>
            </div>
            <div className="inputBox">
            <form onSubmit={this.handleClick}>
            <input 
                className="inputPid"
                type ="text"
                value={this.state.pid}
                onChange ={(event)=>this.setState({pid :event.target.value})}
                placeholder="Enter product id to track"
                required
            />
            </form>
            <div onClick={this.handleClick} >
            <img src={addbutton} style={addbuttonStyle} />
            </div>
            </div>
            </div>

        );
    }
}

const addbuttonStyle={
    height: 40 +'px', 
    width: 40 + 'px', 
    float: 'right'
    

}

class Item extends React.Component {
render(){
    const item= this.props.item;
    return(
    <div className='itemCard' >
        <div>NAME : {item}</div>
       
    </div>
    );

}
}
const ItemList = (props) =>{

    const items = props.items.map((item, i) => (
        <div key={item} onClick={() => this.handleRemove(i)}>
          <Item key ={i} item={item}/>
        </div>
      ));
  

    return(
    <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

    {items}
        </ReactCSSTransitionGroup>
    );
    
    
}

class VendorContainer extends React.Component{
    state={
        items:[],
    };

    addNewItem = (itemData) => {
        this.setState(prevState => ({
            items: [...prevState.items, itemData],
      }));
    };

    render(){
        return(
            <div className='Vendorbox'>
                <div>
            <FlipKart onAdd={this.addNewItem}/>
            </div>
            <div>
            <ItemList items={this.state.items}/>
            </div>
            </div>
        );
    }
}


export default VendorContainer;