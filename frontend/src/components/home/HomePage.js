import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Travel Buddy</h3>
                    <p>This is a forum for all people that love traveling and do not want to travel alone</p>
                    <ul>
                        <li><a href="https://spring.io/projects/spring-boot">Spring</a></li>
                        <li><a href="https://www.postgresql.org">PostgreSQL</a></li>
                        <li><a href="https://reactjs.org">React</a></li>
                        <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a></li>
                        <li><a href="https://github.com/axios/axios">Axios</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomePage;