import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarText">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <span class="material-icons">notifications</span>
                        </li>
                        <li className="nav-item">
                            <span class="material-icons">account_balance</span>
                        </li>
                        <li className="nav-item">
                            <span class="material-icons">account_circle</span>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
