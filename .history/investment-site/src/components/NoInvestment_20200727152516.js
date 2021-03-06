import React, { Component } from 'react'
import InvestButton from './InvestButton'

class NoInvestment extends Component {
    render() {
        return (
            <div className="container text-center align-middle" style="height:100%">
                <p>You do not have any investments.</p> 
                <InvestButton />               
            </div>
        )
    }
}

export default NoInvestment
