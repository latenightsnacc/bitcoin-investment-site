import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import NoInvestmentImg from '../assets/no-investment.png'


class InvestButton extends Component {

    render() {
        return (
            <>
                <div class="uk-inline uk-light">
                    <img src={NoInvestmentImg} alt="" />
                    <div class="uk-position-center">
                        <div>
                            <p>You have no investments.</p>
                            <button class="uk-button uk-button-primary">Invest now</button>
                        </div> 
                    </div>
                </div>
            </>


        )   
    }
}

export default InvestButton
