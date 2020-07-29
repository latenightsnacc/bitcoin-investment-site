import React, { Component } from 'react'


class SideNav extends Component {
    render() {
        return (
            <>
                <div className="container" style={navStyle}>
                    <div className="side-header">
                        <img src="#" alt="Logo" />
                        <h3>Side Navigation</h3>
                    </div>
                    <ul className="side-nav" style={ulStlye}>
                        <li>Investments</li>
                        <li>Packages</li>
                        <li>Confirmed</li>
                        <li>Pending</li>
                        <li>How To Invest</li>
                        <li>Help</li>
                    </ul>
                </div> 
            </>
        )
    }
}

const navStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%"

}

const ulStlye = {
    listStyle: "none",
}
export default SideNav
