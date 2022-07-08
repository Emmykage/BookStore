import React from "react";
class InputForm extends React.Component{
    render(){
        return (
            <form>
                <input type="text" name="title" placeholder="Enter NAme of Book"/>
                <input type="text" name="author" placeholder="Enter Name of AUthor" />


            </form>
        )
    }
}
export default InputForm