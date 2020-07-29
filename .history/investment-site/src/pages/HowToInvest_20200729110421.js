import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Button from '../components/Button'

class HowToInvest extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <SideNav />
                <div className="container" style={centerBox}>
                    <h3>How To Invest</h3>
                    <ol style={steps}>
                        <li className="mb-3">Copy the website's bitcoin address.</li>
                        <li className="mb-3">Make an off-app deposit to the address.</li>
                        <li className="mb-3">For bank transfer, use ...</li>
                        <li className="mb-3">Click on the investment you chose and upload proof of payment.</li>
                    </ol>
                    <div className="btnBox">
                        <Button title="Invest" />
                    </div>
                </div>  
            </>
        )
    }
}

const steps = {
    display: "flex",
    flexDirection:"column",
    alignItems: "flex-start",
    justifyContent: "space-around"
}

const centerBox = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column"
}
export default HowToInvest
