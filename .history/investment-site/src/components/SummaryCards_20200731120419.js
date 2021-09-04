import React, { Component } from 'react'
import Graph from './Graph'

class SummaryCards extends Component {
    render() {
        return (
                <div class="card mb-5">
                    <div class="card-header">
                        <span class="material-icons sc-icon">{this.props.icon}</span>
                        <div class="card-title">{this.props.cardVal}  {this.props.value}
                            <span>{this.props.title}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <Graph />
                    </div>
                </div>
        )
    }
}

export default SummaryCards
