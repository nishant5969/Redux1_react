import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <center>
                <Link to="/"><h2>React Redux App</h2></Link>
            </center>
        </div>
    )
}

export default Header;