import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import NoInvestmentImg from '../assets/no-investment.png'


class InvestButton extends Component {

    onClick
    render() {
        return (
            <>
                <div class="uk-inline uk-light">
                    <img src={NoInvestmentImg} alt="" />
                    <div class="uk-position-center">
                        <div>
                            <p>You have no investments.</p>
                            <Link to="/OpenTransaction.js"  class="uk-button uk-button-primary" uk-toggle>Invest Now</Link>
                        </div> 
                    </div>
                </div>
            </>


        )   
    }
}

export default InvestButton
