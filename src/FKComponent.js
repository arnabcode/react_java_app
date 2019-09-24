import React ,{Component} from 'react';
import './FKComponent.css'
import logo from './Flipkart_logo.png'
import addbutton from './addbutton.png'

const testData = [
{name: 'phone',price: '2000',inStock: true},
{name: 'maggi',price: '200',inStock: true},
{name: 'laptop', price: '20000', inStock: false}

];


class FlipKart extends React.Component{

    state={
        clicked:false,
        pid:"",

    }
    handleClick=()=>{
        this.setState({clicked:true});


    }
    showitems=()=>{
        console.log("hello");
    }

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
            <input 
                className="inputPid"
                type ="text"
                value={this.state.id}
                onChange ={(event)=>this.setState({pid :event.target.value})}
                placeholder="Enter product id to track"
                required
            />
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
    const item= this.props;
    return(
    <div className='itemCard'>
        <span>NAME : {item.name}</span>
        <span>PRICE :{item.price}</span>
        <span>InStock :{item.inStock}</span>
    </div>
    );

}
}
const ItemList = () =>(
    <div>
  	{testData.map(item => <Item {...item}/>)}
	</div>
);

class VendorContainer extends React.Component{
    state={
        items:testData,
    };

    addNewItem = (itemData) => {
        this.setState(prevState => ({
            items: [...prevState.items, itemData],
      }));
    };

    render(){
        return(
            <div >
            <FlipKart onAdd={this.addNewItem}/>
            <ItemList />
            </div>
        );
    }
}


export default VendorContainer;