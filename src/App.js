import React from 'react';
import Me from './Me';
import Friends from './Friends';
import Addfrnd from './AddFrnd';

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
  addFrnd = (newFrnd)=>{
    console.log(newFrnd)
    newFrnd.id = Math.random();
    let Friends=[...this.state.friends,newFrnd]
    this.setState({
      friends:Friends
    })
  }
  delFrnd = (id)=>{
    console.log(id)
    let Friends = this.state.friends.filter((frnd)=>{
      return frnd.id !== id
    });
    this.setState({
      friends:Friends
    })
  }
  
  render(){
    return(
      <div>
        <Me />
        {this.state.name}
        <h2>Please enter your name below</h2>
        <input type='text' onChange={this.handleChange}/>
        <button onClick={this.handleClick}  >Submit</button>
        <Friends data={this.state.friends} delFrnd={this.delFrnd}/>
        <Addfrnd addFrnd={this.addFrnd}/>


      </div>
    )
  }
}



export default App;
