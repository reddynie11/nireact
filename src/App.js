import React from 'react';
import Me from './Me';
import Friends from './Friends';

class App extends React.Component{
  state ={
    friends :[
      {name: 'Steven', age: 34, city:'Vizag', id:1},
      {name: 'Venkatesh', age: 28, city:'Guntur', id:2},
      {name: 'Vinay', age: 35, city:'Bittergunta', id:3},
      {name: 'Vijay', age: 33, city:'Madanapalli', id:4},
    ]
  }
  handleChange=(e)=>{
    this.setState({
      name: e.target.value
    })
  }
  handleClick =(e)=>{
    e.preventDefault();
    }
  
  render(){
    return(
      <div>
        <Me />
        {this.state.name}
        <h2>Please enter your name below</h2>
        <input type='text' onChange={this.handleChange}/>
        <button onClick={this.handleClick}  >Submit</button>
        <Friends data={this.state.friends}/>


      </div>
    )
  }
}



export default App;
