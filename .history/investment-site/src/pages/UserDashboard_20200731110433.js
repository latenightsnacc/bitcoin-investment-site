import React, { Component } from 'react'
import SideBar from '../components/SideNav'
import Header from '../components/Header'



class UserDashboard extends Component {
    render() {
        return (
            <>
              <SideBar />
              <Header />  
            </>
        )
    }
}

export default UserDashboard
