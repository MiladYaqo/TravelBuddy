import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";

class LoginPage extends Component {
    async login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }

    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 " style={{color: "grey"}}>
                            <h2 style={{color: "White"}}>Travel Buddy </h2>
                            <h1></h1>
                              <img rel="apple-touch-icon" src="logo111.png" width= "150px" height="150px"/>
                            <p>Find your travel companion.
                            <br/> A place for all travel lovers.<br/>

                             </p>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12  strong-shadow">
                                    <LoginForm onSubmit={this.login} />
                                </div>

                                <div className="col-12 mt-4">
                                    <RegisterForm onSubmit={this.register}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;