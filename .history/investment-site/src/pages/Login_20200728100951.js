import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="container" style={centerBox}>
                <form id='login-form' className="login-form" style={formStyle}>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6 mb-3">
                            <input name="email" id="email" type="email" required="true" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6 mb-3">
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

const formStyle = {
    display: "flex",
    flexDirection: "column",
    height: "500px",
    width: "400px",
    boxShadow: "0 5px 15px rgba(0,0,0,.08)",
    justifyContent: "center",
    alignItems: "center"
}
const centerBox = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}
export default Login
