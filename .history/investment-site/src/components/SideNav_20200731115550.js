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
                        <NavItem eventKey="dashboard">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>dashboard</span>
                            </NavIcon>
                            <NavText>
                                Dashboard
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="investment">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>account_balance_wallet</span>
                            </NavIcon>
                            <NavText>
                                Investment
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="withdrawal">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>add_shopping_cart</span>
                            </NavIcon>
                            <NavText>
                                Withdrawal
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="transactions">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>credit_card</span>
                            </NavIcon>
                            <NavText>
                                Transactions
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="withdrawal">
                            <NavIcon>
                            <span class="material-icons" style={{ fontSize: '1.75em' }}>add_shopping_cart</span>
                            </NavIcon>
                            <NavText>
                                Withdrawal
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>

            </>
        )
    }
}


export default SideBar
