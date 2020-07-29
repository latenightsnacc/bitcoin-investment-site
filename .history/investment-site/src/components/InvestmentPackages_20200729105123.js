import React, { Component } from 'react'
import PackageCard from './PackageCard'
import NavBar from './Navbar'
import SideNav from './SideNav'
class InvestmentPackages extends Component {
    render() {
        return (
            <NavBar />
            <div className="row"
            <div className="container">
                <div className="row">
                    <div className="col-s12 col-md-3 col-lg-3">
                        <PackageCard />
                    </div>
                    <div className="col-s12 col-md-3 col-lg-3">
                    <PackageCard />
                    </div>
                    <div className="col-s12 col-md-3 col-lg-3">
                    <PackageCard />
                    </div>
                    <div className="col-s12 col-md-3 col-lg-3">
                    <PackageCard />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default InvestmentPackages
