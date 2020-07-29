import React, { Component } from 'react'
import InvestButton from './InvestButton'
import NoInvestmentImg from '../assets/no-investment.png'

class NoInvestment extends Component {
    render() {
        return (
            <div className="container" >
                <div class="uk-inline uk-light">
                    <img src={NoInvestmentImg} alt="" />
                    <div class="uk-position-center">
                        <div>
                            <p>You have no investments.</p>
                            <InvestButton />
                        </div>
                    </div>
                </div>              
            </div>
        )
    }
}

const center = {
    height: "100vh",
    width: "100%",
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}
export default NoInvestment
