import React, { Component } from 'react';

//Navbar Comp - Render title and num users online
class NavBar extends Component {
    render() {
        console.log("Rendering NavBar Component");
        return (
            <div>
                <nav className="nav-bar">
                    <h1 className="chatty-title">CHATTY</h1>
                    <h1 className="navbar-counter">{this.props.counter} users online</h1>
                </nav>
            </div>
        );
    }
}


export default NavBar;
