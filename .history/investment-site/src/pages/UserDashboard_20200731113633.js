import React, { Component } from 'react'
import SideBar from '../components/SideNav'
import Header from '../components/Header'
import SummaryCards from '../components/SummaryCards'



class UserDashboard extends Component {
    render() {
        return (
            <>
                <SideBar />
                <Header />
                <div className="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-3 col-lg-3">
                            <SummaryCards title='Amount Invested' value='0' icon='account_balance_wallet' />
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-3">
                            <SummaryCards title='Total Amount' value='0' icon='assessment' />
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-3">
                            <SummaryCards title='Rate of Return' value='0' icon='pie_chart' />
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-3">
                            <SummaryCards title='Amount Invested' value='0' icon='account_balance_wallet' />
                        </div>
                    </div>
                </div>  
            </>
        )
    }
}

export default UserDashboard
