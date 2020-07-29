import React, { Component } from 'react'
import Graph from '../components/AdminSummarycards'
import NavBar from '../components/Navbar'
import SideNav from '../components/SideNav'
import NoInvestment from '../components/NoInvestment'
import SummaryCards from '../components/SummaryCards'
import Overview from '../components/Overview'
import WithdrawCard from '../components/WithdrawCard'

class UserDashboard extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="row">
                    <div className="col-s2 col-md-2 col-lg-2">
                        <SideNav />
                    </div>
                    <div className="col-s10 col-md-10 col-lg-10">
                        <div className="container">
                            <div className="row mt-5 ">
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
                                    <WithdrawCard />
                                    <WithdrawCard />
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
