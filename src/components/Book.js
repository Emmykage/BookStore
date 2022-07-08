import React from "react";

class Book extends React.Component{
    render(){
        return(
           <li>
                
                    <h2>Title: {this.props.title}</h2>
                    <h3>Author: {this.props.author} </h3>
                    <button>Remove</button>
               
           </li>
        )
    }
}
export default Book