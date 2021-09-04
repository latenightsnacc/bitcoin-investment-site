import React, { Component } from 'react'

class UnconfirmedPayments extends Component {
    render() {
        return (
            <>
              <div class="card mb-5">
                    <div class="row card-container">
                        <div class="col-sm-9 col-md-9 col-lg-9">
                            <div class="investment-title">Platinum Payout <br/>
                                <span>5: 10: 40 mins</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="30" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="col-sm-3 col-md-3 col-lg-3">
                            <div class="btnBox pt-3">
                                <button class="btn btn-primary">Withdraw</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </>
        )
    }
}

export default UnconfirmedPayments
