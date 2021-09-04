import React, { Component } from 'react'

class SummaryCards extends Component {
    render() {
        return (
                <div class="card mb-5">
                    <div class="card-header">
                        <span class="material-icons sc-icon"></span>
                        <div class="card-title">USD {this.props.value}
                            <span>{this.props.title}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h2>GRAPH</h2>
                    </div>
                </div>
        )
    }
}

export default SummaryCards
