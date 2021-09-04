import React, { Component } from 'react'
import {Link }from 'react-router-dom'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SideBar extends Component {
    render() {
        return (
            <>
                <SideNav
                    onSelect={(selected) => {
                        // Add your code here
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="dashboard">
                        <NavItem eventKey="dashboard" class="menu-item">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>dashboard</span>
                            </NavIcon>
                            <NavText>
                                Dashboard
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="investment" class="menu-item">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>account_balance_wallet</span>
                            </NavIcon>
                            <NavText>
                                Investment
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="withdrawal" class="menu-item">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>add_shopping_cart</span>
                            </NavIcon>
                            <NavText>
                                Withdrawal
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="transactions" class="menu-item">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>credit_card</span>
                            </NavIcon>
                            <NavText>
                                Transactions
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="profile" class="menu-item">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>assignment_ind</span>
                            </NavIcon>
                            <NavText>
                                Profile
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="verification" class="menu-item">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>verified_user</span>
                            </NavIcon>
                            <NavText>
                                Verification
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="contact" class="menu-item">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>contact_support</span>
                            </NavIcon>
                            <NavText>
                                Contact Us
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>

            </>
        )
    }
}


export default SideBar
