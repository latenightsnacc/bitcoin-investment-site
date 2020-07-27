import React, { Component } from 'react'

class SummaryCards extends Component {
    render() {
        return (
            <div class="uk-card uk-card-default uk-card-small uk-card-body">
                <h3 class="uk-card-title">{this.props.title}</h3>
                <p>{this.props.value}</p>
            </div>
        )
    }
}

export default SummaryCards
