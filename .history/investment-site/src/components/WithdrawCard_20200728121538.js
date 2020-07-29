import React, { Component } from 'react'
import Button from './Button'

class WithdrawCard extends Component {
    render() {
        return (
            <>
                <div class="uk-card uk-card-default uk-card-medium uk-card-body">
                    <div className="">
                        <div className="row" style={cardStlye}>
                            <div className="col-s8 col-md-8 col-lg-8">
                                <h5 className="investment-title">Boo Boo Investment</h5>
                                <p className="wc-title">Total Time Left Withdrawal </p>
                                <p>25 Days : 10 hours</p>

                            </div>
                            <div className="col-s4 col-md-4 col-lg-4">
                                <Button title="Withdraw" style={loadingBtn} />
                            </div>
                        </div>
                    </div>
                </div>  
            </>
        )
    }
}

const cardStlye = {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%"
}

const loadingBtn = {
    backgroundColor: "grey !important"
}
export default WithdrawCard
