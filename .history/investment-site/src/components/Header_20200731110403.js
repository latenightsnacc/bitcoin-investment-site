import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <>
                <div className="header mb-5">
                    <div className="menu">
                        <button className="icon" id="menu-icon">
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="other-icons pr-3">
                            <button className="icon">
                                <i className="fa fa-bell"></i>
                            </button>
                            <button className="icon">
                                <i className="fa fa-user"></i>
                            </button>
                            <button className="icon">
                                <i className="fa fa-sign-out"></i>
                            </button>
                        </div>
                    </div>
                </div>   
            </>
        )
    }
}

export default Header
