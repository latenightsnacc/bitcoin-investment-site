import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light" style={nav}>
                    <div className="container">
                        <a className="navbar-brand" href="#">Logo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ml-auto d-flex align-middle ">
                                <li className="nav-item mr-5">
                                    <span class="material-icons">notifications</span>
                                </li>
                                <li className="nav-item mr-5">
                                    <span class="material-icons">account_balance</span>
                                </li>
                                <li className="nav-item mr-5">
                                    <span class="material-icons">account_circle</span>
                                </li>
                                <li className="nav-item mr-5">
                                    <span className="material-icons">login</span>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </nav>
            </>
        )
    }
}

const nav = {
    backgroundColor: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,.08)"
}
export default Navbar;
