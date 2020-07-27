import React, { Component } from 'react'

class SummaryCards extends Component {
    render() {
        return (
            <div className="card" style={cardStyle}>
                <div className="card-title">
                    <h1>0</h1>
                </div>
                <div className="card-body">Total Transactions</div>
            </div>
        )
    }
}

const cardStyle = {
    height: "80px"
}
export default SummaryCards
