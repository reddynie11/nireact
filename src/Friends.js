import React from 'react';

const Friends = ({data})=>{
    
        return(
            <div>
                {data.map((frnd)=>{
                    if (frnd.age<34){
                        return(
                            <div key={frnd.id} style={{'border' : '1px solid black'}}>
                                <div>{frnd.name}</div>
                                <div>{frnd.age}</div>
                                <div>{frnd.city}</div>
                            </div>
                        )
                    }else return null;
                })}
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

