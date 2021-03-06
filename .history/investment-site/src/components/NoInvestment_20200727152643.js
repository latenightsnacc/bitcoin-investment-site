import React, { Component } from 'react'
import InvestButton from './InvestButton'

class NoInvestment extends Component {
    render() {
        return (
            <div className="container text-center align-middle" style={h100}>
                <p>You do not have any investments.</p> 
                <InvestButton />               
            </div>
        )
    }
}

const h100 = {
    height: "100%"
}
export default NoInvestment
