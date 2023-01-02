
import React from "react";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './login-view.scss';

export const LoginView = ({onLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault(); //this prevents the default behaviour of the form which is to reload the entire page

        const data = {
            Username: username, 
            Password: password
        }; 

        fetch("https://myflix-api-1234.herokuapp.com/login", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Login response: ", data);
            if (data.user){
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else {
                alert("No such user");
            }
        }) 
        .catch((e) => {
            alert("Something went wrong")
        });
    };

    return (
        <Container id="main-container" className="d-grid h-50">
            <Form onSubmit={handleSubmit} id="login-form" className="text-center w-100">
                <h1 className="mb-3 fs-3 fw-normal">Login</h1>
                <Form.Group controlId="loginUsername" className="mb-1">
                    <Form.Control type="text" 
                        placeholder="Username"
                        size="sm"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="loginPassword" className="mb-2">
                    <Form.Control type="password"
                        placeholder="Password"
                        size="sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required>
                    </Form.Control>
                </Form.Group>
                <div className="mt-2 d-grid">
                    <Button variant="primary" size="sm" type="submit">Submit</Button>
                </div>
            </Form>
        </Container>
    );
};
