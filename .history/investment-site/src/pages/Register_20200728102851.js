import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div className="container" style={centerBox}>
                
                <form id='login-form' className="login-form" style={formStyle}>
                    <div className="form-header">
                        <img src="#" alt="Logo" />
                        <h3 className="title" style={titleStyle}>Register</h3>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6 mb-2">
                            <input style={inputStyle} name="name" id="name" type="text" required="true" placeholder="Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6 mb-2">
                            <input style={inputStyle} name="referral-code" id="referral-code" type="text" required="true" placeholder="Referral Code" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6 mb-2">
                            <input style={inputStyle} name="email" id="email" type="email" required="true" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6 mb-2">
                            <input style={inputStyle} name="password" id="password" type="password" required="true" placeholder="Create Password" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6 mb-2">
                            <input style={inputStyle} name="confirm-password" id="confirm-password" type="password" required="true" placeholder="Confirm Password" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-s12 col-md-6 col-lg-6">
                            <input style={btnStyle} type="submit" value="REGISTER" />
                        </div>
                    </div>
                    <p>Already have an account? <a>Login</a></p>
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
    color: "white",
    display: "block",
    width: "300px"
}
const titleStyle = {
    color: "blue",
    textTransform: "uppercase"
}
const centerBox = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}
export default Register
