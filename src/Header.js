import React, {Component} from 'react';
class Header extends Component{
    constructor(){
        super();
        this.state={};
    }
    render(){
        return (<header>
            <div>Logo</div>
            <nav>
                <ul>
                    <li><a href="www.google.com">Create Ads</a></li>
                    <li><a href="www.google.com">About Us</a></li>
                    <li><a href="www.google.com">Login</a></li>
                    <li><a href="www.google.com" className="register-btn">Register</a></li>
                </ul>
            </nav>
        </header>);
    }
}



export default Header;