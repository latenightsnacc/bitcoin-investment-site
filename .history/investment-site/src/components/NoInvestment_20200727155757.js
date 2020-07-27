import React, { Component } from 'react'
import InvestButton from './InvestButton'

class NoInvestment extends Component {
    render() {
        return (
            <div className="container" >
                <div style={center}>
                    <p>You do not have any investments.</p> 
                    <InvestButton />  
                </div>
                             
            </div>
        )
    }
}

const center = {
    minheight: "100%",
    width: "100%",
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}
export default NoInvestment
