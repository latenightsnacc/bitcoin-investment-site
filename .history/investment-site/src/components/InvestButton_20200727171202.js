import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import NoInvestmentImg from '../assets/no-investment.png'
import { HashLink as Link } from 'react-router-hash-link';


class InvestButton extends Component {
    render() {
        return (
            <>
                <div class="uk-inline uk-light">
                    <img src={NoInvestmentImg} alt="" />
                    <div class="uk-position-center">
                        <div>
                            <p>You have no investments.</p>
                            <Link to="/#modal-center"  class="uk-button uk-button-primary" uk-toggle>Invest Now</Link>
                        </div> 
                    </div>
                </div>
                <div id="modal-center" class="uk-flex-top" uk-modal>
                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

                        <button class="uk-modal-close-default" type="button" uk-close></button>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    </div>
                </div>  
            </>


        )   
    }
}

export default InvestButton
