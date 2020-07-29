import React, { Component } from 'react'
import Button from './Button'

class WithdrawCard extends Component {
    render() {
        return (
            <>
                <div class="uk-card uk-card-default uk-card-medium uk-card-body">
                    <div className="">
                        <div className="row">
                            <div className="col-s8 col-md-8 col-lg-8">
                                <h5 className="wc-title">Total Time Left Withdrawal </h5>
                                <p>24 Days : 10 hours</p>

                            </div>
                            <div className="col-s4 col-md-4 col-lg-4">
                                <Button title="Withdraw" />
                            </div>
                        </div>
                    </div>
                </div>  
            </>
        )
    }
}

export default WithdrawCard
