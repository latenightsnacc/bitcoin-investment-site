import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="container" style={centerBox}>
                
                <form id='login-form' className="login-form" style={formStyle}>
                    <div className="form-header">
                        <img src="#" alt="Logo" />
                        <h3 className="title" style={titleStyle}>Login</h3>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6 mb-5">
                            <input style={inputStyle} name="email" id="email" type="email" required="true" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6 mb-5">
                            <input style={inputStyle} name="password" id="password" type="password" required="true" placeholder="Password" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6">
                            <input style={btnStyle} type="submit" value="LOGIN" />
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
const inputStyle = {
    minWidth: "300px",
    padding: "10px",
    border: "none",
    borderBottom: "1px solid blue",
    color: "black",
    backgroundColor: "transparent",
    placeholder: 'black'
}
const btnStyle = {
    padding: "10px",
    border: "1px solid blue",
    backgroundColor: "blue",
    color: "white"
}
const titleStyle = {
    color: "blue"
}
const centerBox = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}
export default Login
