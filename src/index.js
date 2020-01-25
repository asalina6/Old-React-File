import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Listings from './Listings';
import Filter from './Filter';
import './css/main.css';

class App extends Component{
    constructor(){
        super()
        this.state={name:'Armando'}
    }
    render(){
        return (<div>
            <Header/>
          
            <section id="content-area">
                <aside>
                    <Filter/>
                </aside>
                <Listings/>
            </section>
            
            
            </div>);
    }
}

ReactDOM.render( < App /> , document.getElementById('root'));