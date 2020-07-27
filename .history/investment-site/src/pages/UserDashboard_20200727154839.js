import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import NoInvestment from '../components/NoInvestment'
import SummaryCards from '../components/SummaryCards'


class UserDashboard extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Menu />
                <div className="container">
                    <div className="row">
                        <div className="col-s12 col-md-3 col-lg-3">
                            <SummaryCards />
                        </div>
                        <div className="col-s12 col-md-3 col-lg-3">
                            <SummaryCards />
                        </div>
                        <div className="col-s12 col-md-3 col-lg-3">
                            <SummaryCards />
                        </div>
                        <div className="col-s12 col-md-3 col-lg-3">
                            <SummaryCards />
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
