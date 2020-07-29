import React, { Component } from 'react'
import Graph from '../components/Graph'
import NavBar from '../components/Navbar'
import SideNav from '../components/SideNav'
import NoInvestment from '../components/NoInvestment'
import SummaryCards from '../components/SummaryCards'
import Overview from '../components/Overview'

class UserDashboard extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="row">
                    <div className="col-s3 col-md-3 col-lg-3">
                        <SideNav />
                    </div>
                    <div className="col-s9 col-md-9 col-lg-9">
                        <div className="container">
                            <div className="row">
                                {/* Summary Cards */}
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
                                {/* Overview */}
                                <div className="col-s12 col-md-3 col-lg-3">
                                    <Overview />
                                </div>
                                {/* Withdrawal Graph */}
                                <div className="col-s12 col-md-6 col-lg-6">
                                    <Graph />
                                </div>

                                <div className="col-s12 col-md-3 col-lg-3"></div>
                            </div>
                        </div>  
                    </div>
                </div>
            </>
        )
    }
}

export default UserDashboard
