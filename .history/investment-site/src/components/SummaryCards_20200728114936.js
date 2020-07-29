import React, { Component } from 'react'

class SummaryCards extends Component {
    render() {
        return (
            <div class="uk-card uk-card-default uk-card-small uk-card-body mb-5 ">
                <h3 class="uk-card-title">{this.props.value}</h3>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default SummaryCards
