import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="container">
                <form id='login-form' className="login-form">
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6">
                            <input name="email" id="email" type="email" required="true" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6">
                            <input name="password" id="password" type="password" required="true" placeholder="Password" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6">
                            <input type="submit" value="LOGIN" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
