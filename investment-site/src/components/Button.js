import React, { Component } from 'react'
import {Link} from 'react-router-dom';



class Button extends Component {

    render() {
        return (
            <>
                <div class="container">
        <button className="uk-button uk-button-primary">{this.props.title}</button>
                </div>
            </>


        )   
    }
}

export default Button
