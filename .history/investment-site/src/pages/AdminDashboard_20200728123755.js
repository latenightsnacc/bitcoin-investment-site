import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'

class AdminDashboard extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="row">
                    <div className="col-s12 col-md-4 col-lg-4"></div>
                </div>
            </>
        )
    }
}

export default AdminDashboard;
