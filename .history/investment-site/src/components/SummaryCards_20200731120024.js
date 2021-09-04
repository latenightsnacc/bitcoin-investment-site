import React, { Component } from 'react'

class SummaryCards extends Component {
    render() {
        return (
                <div class="card mb-5 ml-4">
                    <div class="card-header">
                        <span class="material-icons sc-icon">{this.props.icon}</span>
                        <div class="card-title">{this.props.cardVal}  {this.props.value}
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
