import React, { Component } from 'react'

class Overview extends Component {
    render() {
        return (
            <div className="container">
                <div className="cards">
                    <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">0</h3>
                        <p>Pending</p>
                    </div>
                    <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">0</h3>
                        <p>Confirmed</p>
                    </div>
                    <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">0</h3>
                        <p>Total</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Overview
