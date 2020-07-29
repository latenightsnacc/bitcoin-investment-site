import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light" style={nav}>
                    <div className="container-fluid pl-4">
                        <Link className="navbar-brand" to="/">Logo</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ml-auto d-flex align-middle ">
                                <li className="nav-item ml-5">
                                    <span class="material-icons">notifications</span>
                                </li>
                                <li className="nav-item ml-5">
                                    <span class="material-icons">monetization_on</span>
                                </li>
                                <li className="nav-item ml-5">
                                    <span class="material-icons">account_circle</span>
                                </li>
                                <li className="nav-item ml-5">
                                    <span class="material-icons">help_outline</span>
                                </li>
                                <li className="nav-item ml-5">
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
