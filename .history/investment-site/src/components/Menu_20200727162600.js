import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
            <div className="container">
                <div className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <ul className="navbar-nav ml-auto mr-auto" style={menu}>
                        <li >
                            <a className="menu-link">Hello</a>
                        </li>
                        <li className="ml-3">
                            <a className="menu-link">Hello</a>
                        </li>
                        <li className="ml-3">
                            <a className="menu-link">Hello</a>
                        </li>
                        <li className="ml-3">
                            <a className="menu-link">Hello</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

const menu = {
    height: "100px",
    display: "flex",
    alignItems:"center",
    backgroundColor: "white"
}
export default Menu
