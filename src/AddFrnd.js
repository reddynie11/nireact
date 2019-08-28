import React from 'react';

class Addfrnd extends React.Component{
    state={
        name:'',
        age:'',
        city:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addFrnd(this.state)
    }
    render(){
        return(
            <div>
                <h2>Add a Friend</h2>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="name" >Name: </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="name" >Age: </label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="name" >City: </label>
                    <input type="text" id="city" onChange={this.handleChange}/><br/>
                    <button type="submit">Submit</button>
                    
                </form>
            </div>
        )
    }
}
export default Addfrnd;