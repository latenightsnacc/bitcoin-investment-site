import React, { Component } from 'react'

class UnconfirmedPayments extends Component {
    render() {
        return (
            <>
              <div className="card mb-5">
                    <div className="row card-container">
                        <div className="col-sm-9 col-md-9 col-lg-9">
                            <div className="investment-title">Platinum Payout <br/>
                                <span>5: 10: 40 mins</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="30" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className="btnBox pt-3">
                                <button className="btn btn-primary">Withdraw</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </>
        )
    }
}

export default UnconfirmedPayments
