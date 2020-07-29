import React, { Component } from 'react'
import PackageCard from './PackageCard'
import NavBar from './Navbar'
import SideNav from './SideNav'
class InvestmentPackages extends Component {
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
                                <div className="row d-flex flex-wrap mt-5 ">
                                    {/* Summary Cards */}
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
                        </div>
                    </div>   
                </>
        )
    }
}

export default InvestmentPackages
