import React, { Component } from 'react'

class Overview extends Component {
    render() {
        return (
            <div className="">
                <div className="cards">
                    <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">0</h3>
                        <p style={rule}>Pending</p>
                        <h3 class="uk-card-title">0</h3>
                        <p style={rule}>Confirmed</p>
                        <h3 class="uk-card-title">0</h3>
                        <p style={rule}>Total</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

const rule = {
    borderBottom: "1px dotted blue",
    width: "100%"

}
export default Overview
