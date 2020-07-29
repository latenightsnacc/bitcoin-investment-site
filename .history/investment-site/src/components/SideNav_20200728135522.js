import React, { Component } from 'react'
import Link from 'react-router-dom'


class SideNav extends Component {
    render() {
        return (
            <>
                <div className="container" style={navStyle}>
                    <div className="side-header pt-5 ">
                        <h4 className="pl-4">Yahoo</h4>
                    </div>
                    <ul className="side-nav" style={ulStlye}>
                        <li className="mb-3">
                            <Link to='/' >Investments</Link></li>
                        <li className="mb-3">
                            <Link to='/InvestmentPackages' >Packages </Link>
                        </li>
                        <li className="mb-3">Confirmed</li>
                        <li className="mb-3">Pending</li>
                        <li className="mb-3">
                            <Link to='/HowToInvest'>How To Invest</Link>
                        </li>
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
    width:"100%",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "blue",
    textTransform: "capitalize"
}
export default SideNav
