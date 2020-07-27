import React, { Component } from 'react'
import InvestButton from './InvestButton'

class NoInvestment extends Component {
    render() {
        return (
            <div className="container" >
                <div className="mt-auto mb-auto">
                    <p>You do not have any investments.</p> 
                    <InvestButton />  
                </div>
                             
            </div>
        )
    }
}

export default NoInvestment
