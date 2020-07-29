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
                                    <AdminSummaryCards title="Today Revenue" value="0" />
                                </div>
                                <div className="col-s12 col-md-3 col-lg-3">
                                    <AdminSummaryCards title="Bitcoin Sold" value="0" />
                                </div>
                                <div className="col-s12 col-md-3 col-lg-3">
                                    <AdminSummaryCards title="New Customers" value="0" />
                                </div>
                                <div className="col-s12 col-md-3 col-lg-3">
                                    <AdminSummaryCards title="Total Transactions" value="0" />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-s12 col-md-6 col-lg-6">
                                    
                                </div>
                                <div className="col-s12 col-md-6 col-lg-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AdminDashboard;
