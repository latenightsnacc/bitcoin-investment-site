import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NoInvestmentImg from '../assets/no-investment.png'


class InvestButton extends Component {
    render() {
        return (
            <div>

                <div class="uk-inline uk-light">
                    <img src={NoInvestmentImg} alt="" />
                    <div class="uk-position-center">
                        <p>You have no investments.</p>
                        <Link to="#modal-center"  class="uk-button uk-button-primary" uk-toggle>Invest Now</Link>
                    </div>
                </div>

            </div>
        )   
    }
}

export default InvestButton
