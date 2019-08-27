import React from 'react';

class App extends React.Component{
  state ={
    name : ''
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
        {this.state.name}
        <h2>Please enter your name below</h2>
        <input type='text' onChange={this.handleChange}/>
        <button onClick={this.handleClick}  >Submit</button>

      </div>
    )
  }
}



export default App;
