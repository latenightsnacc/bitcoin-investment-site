import React, { Component } from 'react'
import InvestButton from './InvestButton'

class NoInvestment extends Component {
    render() {
        return (
            <div className="container text-center align-middle">
                <div className="d-flex align-items-center">
                    <p>You do not have any investments.</p> 
                    <InvestButton />     
                </div>
                          
            </div>
        )
    }
}

export default NoInvestment
