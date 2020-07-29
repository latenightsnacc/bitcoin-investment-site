import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Button from '../components/Button'

class HowToInvest extends Component {
    render() {
        return (
            <>
                <Navbar />
                    <div className="row">
                        <div className="col-s2 col-md-2 col-lg-2">
                            <SideNav />
                        </div>
                        <div className="col-s10 col-md-10 col-lg-10">
                            <div className="container mt-5" style={centerBox}>
                                <h3 style={steps}>How To Invest</h3>
                                <ol style={steps}>
                                    <li className="mb-3">Copy the website's bitcoin address.</li>
                                    <li className="mb-3">Make an off-app deposit to the address.</li>
                                    <li className="mb-3">For bank transfer, please request bank transfer</li>
                                    <li className="mb-3">Click on the investment you chose and upload proof of payment.</li>
                                </ol>
                                <div className="btnBox" style={steps}>
                                    <Button title="Invest" />
                                </div>
                            </div>  
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
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column"
}
export default HowToInvest
