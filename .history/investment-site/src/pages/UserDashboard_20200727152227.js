import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import NoInvestment from '../components/NoInvestment'

class UserDashboard extends Component {
    render() {
        return (
            <>
                <Navbar />
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
