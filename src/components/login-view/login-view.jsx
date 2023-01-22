
import React from "react";
import { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, CardGroup, Card } from 'react-bootstrap';

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
        <Container className="formset">
            <Row>
                <Col>
                    <CardGroup>
                        <Card text="dark">
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Welcome Back</Card.Title>
                                <Form onSubmit={handleSubmit} id="login-form" className="text-center text-white w-100">
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
                                    <div >
                                        <Button variant="primary" size="sm" type="submit">Login</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
};
