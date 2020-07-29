import React, { Component } from 'react'

class Overview extends Component {
    render() {
        return (
            <div className="">
                <div className="cards">
                    <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">0</h3>
                        <p>Pending</p>
                        <span style={rule}></span>
                        <h3 class="uk-card-title">0</h3>
                        <p>Confirmed</p>
                        <span style={rule}></span>
                        <h3 class="uk-card-title">0</h3>
                        <p>Total</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

const rule = {
    borderTop: "1px solid blue",
    width: "100%"

}
export default Overview
