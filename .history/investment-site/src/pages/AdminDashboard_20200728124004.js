import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import AdminSummaryCards from '../components/AdminSummarycards'

class AdminDashboard extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="row">
                    <div className="col-s2 col-md-2 col-lg-2">
                        <SideNav />
                    </div>
                    <div className="col-s10 col-md-10 col-lg-10">
                        <div className="container">
                            <div className="row mt-5 ">
                                {/* Summary Cards */}
                                <div className="col-s12 col-md-3 col-lg-3">
                                    <AdminSummaryCards title="Last Login" value="0" />
                                </div>
                                <div className="col-s12 col-md-3 col-lg-3">
                                    <AdminSummaryCards title="Total Bitcoin Invested" value="0" />
                                </div>
                                <div className="col-s12 col-md-3 col-lg-3">
                                    <AdminSummaryCards title="Total Amount" value="0" />
                                </div>
                                <div className="col-s12 col-md-3 col-lg-3">
                                    <AdminSummaryCards title="Total Transactions" value="0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AdminDashboard;
