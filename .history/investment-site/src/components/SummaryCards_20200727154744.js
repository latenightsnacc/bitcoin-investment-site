import React, { Component } from 'react'

class SummaryCards extends Component {
    render() {
        return (
            <div className="card" style={cardStyle}>
                <div className="card-title">
                    <h1>0</h1>
                    <span>Total Transactions</span>
                </div>
            </div>
        )
    }
}

const cardStyle = {
    height: "auto"
}
export default SummaryCards
