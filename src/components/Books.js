import React from "react";
import Book from "./Book";
import InputForm from "./InputForm";

class Books extends React.Component{
    state= {
        collections: [
            {   
                id: 1,
                book: "Book One",
                author: "Author one"
            },
            {
                id: 2,
                book: "Book Two",
                author: "Author Two"
            },
            {
                id: 3,
                book: "Book Three",
                author: "Author Three"
            },
            {
                id: 4,
                book: "Book Four",
                author: "Author Five"
            },
          
        
        
        ]
    }
    render(){
        
        return(
            <>
            <div className="bookList">
            <ul>
                   {this.state.collections.map(book =>(
                   
                        <Book key={book.id} collection={book}/>
                   
                ) )}
              
            </ul>

            </div>
            <div className="form">
                <InputForm />

            </div>
           
            
            </>
        )
    }
}
export default Books