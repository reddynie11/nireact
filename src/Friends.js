import React from 'react';

const Friends = ({data,delFrnd})=>{
    
        return(
            <div>
                <h2>Friends</h2>
                <div style={{'display':'flex','flexDirection':'row','flexWrap':'wrap'}} >
                    {data.map((frnd)=>{
                        return(
                            <div key={frnd.id} style={{'border' : '1px solid black', 'width':'200px','padding':'10px','margin':'5px','flex':'1 0 21%','flexGrow':'3', 'textAlign':'center'}}>
                                    <div>Name: {frnd.name}</div>
                                    <div>Age: {frnd.age}</div>
                                    <div>City: {frnd.city}</div>
                                    <button onClick={()=>{delFrnd(frnd.id)}} >Delete</button>
                            </div>
                            
                        )
                        
                    })}
                </div>
            </div>
        )
    
}
export default Friends

// class Friends extends React.Component{
//     state={

//     }
//     render(){
//         let data=this.props.data;
    
//         return(
//             <div>
//               {  data.map((frnd)=>{
//                     return(
//                         <div key={frnd.id} style={{'border' : '1px solid black'}}>
//                             <div>{frnd.name}</div>
//                             <div>{frnd.age}</div>
//                             <div>{frnd.city}</div>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

