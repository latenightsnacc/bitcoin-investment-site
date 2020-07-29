import React, { Component } from 'react'
import Navbar from '../components/Navbar'

class AdminDashboard extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-s12 col-md-4 col-lg-4"></div>
                    </div>
                </div> 
            </>
        )
    }
}

export default AdminDashboard;
