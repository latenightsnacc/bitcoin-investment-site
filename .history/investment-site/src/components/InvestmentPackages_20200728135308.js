import React, { Component } from 'react'
import PackageCard from './PackageCard'
class InvestmentPackages extends Component {
    render() {
        return (
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
