import React, { Component } from 'react'
import Button from './Button'

class WithdrawCard extends Component {
    render() {
        return (
            <>
                <div class="uk-card uk-card-default uk-card-small uk-card-body">
                    <div className="">
                        <div className="row" style={rowStyle}>
                            <div className="col-s8 col-md-8 col-lg-8" style={textStlye}>
                                <h5 className="investment-title">Boo Boo Investment</h5>
                                <span className="wc-title" style={hL}>Total Time Left Withdrawal </span>
                                <p style={hL}>25 Days : 10 hours</p>

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

const textStlye = {
    // display: "flex",
    // alignItems: "flex-start",
    // flexDirection: "column",
    // width: "100%"
    textAlign: "left"
}
const rowStyle = {
    display: "flex",
    alignItems: "center"
}
const hL = {
    lineHeight: "10px"
}

const loadingBtn = {
    backgroundColor: "grey !important"
}
export default WithdrawCard
