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
                        
                    </div>
                </div>
            </>
        )
    }
}

export default AdminDashboard;
