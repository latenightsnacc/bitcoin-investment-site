import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                <form id='login-form'>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6">
                            <input name="email" id="email" type="email" required="true" placeholder="Email" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
