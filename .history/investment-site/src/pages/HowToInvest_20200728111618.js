import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Button from '../components/Button'

class HowToInvest extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Menu />
                <div className="container" style={centerBox}>
                    <h3>How To Ivest</h3>
                    <ol style={steps}>
                        <li>Copy the website's bitcoin address.</li>
                        <li>Make an off-app deposit to the address.</li>
                        <li>For bank transfer, use ...</li>
                        <li>Click on the investment you chose and upload proof of payment.</li>
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
    justifyContent: "center"
}
export default HowToInvest
