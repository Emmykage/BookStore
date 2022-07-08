import React from "react";
import { Link } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <Link to="/"><h1>BookStore</h1></Link>
                    <ul>
                        <li><Link to="/">Books</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                    </ul>

                </nav>
            </header>
        )
    }

}
export default Header