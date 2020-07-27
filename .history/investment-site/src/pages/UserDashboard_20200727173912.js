import React, { Component } from 'react'


import NoInvestment from '../components/NoInvestment'
import SummaryCards from '../components/SummaryCards'


class UserDashboard extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-s12 col-md-3 col-lg-3">
                            <SummaryCards title="Last Login" value="0" />
                        </div>
                        <div className="col-s12 col-md-3 col-lg-3">
                            <SummaryCards title="Total Bitcoin Invested" value="0" />
                        </div>
                        <div className="col-s12 col-md-3 col-lg-3">
                            <SummaryCards title="Total Amount" value="0" />
                        </div>
                        <div className="col-s12 col-md-3 col-lg-3">
                            <SummaryCards title="Total Transactions" value="0" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-s12 col-md-3 col-lg-3"></div>
                        <div className="col-s12 col-md-6 col-lg-6">
                            <NoInvestment />
                        </div>
                        <div className="col-s12 col-md-3 col-lg-3"></div>
                    </div>
                </div>  
            </>
        )
    }
}

export default UserDashboard
