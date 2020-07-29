import React, { Component } from 'react'


class SideNav extends Component {
    render() {
        return (
            <>
                <div className="container" style={navStyle}>
                    <div className="side-header pt-3">
                        <h4>Side Navigation</h4>
                    </div>
                    <ul className="side-nav" style={ulStlye}>
                        <li className="mb-3">Investments</li>
                        <li className="mb-3">Packages</li>
                        <li className="mb-3">Confirmed</li>
                        <li className="mb-3">Pending</li>
                        <li className="mb-3">How To Invest</li>
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
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-start"

}

const ulStlye = {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "blue",
    textTransform: "capitalize"
}
export default SideNav
