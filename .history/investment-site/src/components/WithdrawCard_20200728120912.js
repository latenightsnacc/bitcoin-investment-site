import React, { Component } from 'react'
import Button from './Button'

class WithdrawCard extends Component {
    render() {
        return (
            <>
                <div class="uk-card uk-card-default uk-card-small uk-card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-s9 col-md-9 col-lg-9">
                                <h5 className="wc-title">Total Time Left Withdrawal </h5>
                                <h6>24 Days : 10 hours</h6>

                            </div>
                            <div className="col-s3 col-md-3 col-lg-3">
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
