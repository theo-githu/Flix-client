import { useState } from "react";
import { Container, Form, Button, Row, Col, CardGroup, Card } from 'react-bootstrap';

import './signup-view.scss';

export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password, 
            Email: email,
            Birthday: birthday
        };

        fetch("https://myflix-api-1234.herokuapp.com/users", {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Signup successful!");
                window.location.reload();
            } else {
                alert("Signup failed");
            }
        });
    };

    return (
        <Container id="main-container" className="d-grid h-35">
            <Row>
                <Col>
                    <Card.Group>
                        <Card>
                            <Card.Body>
                                <Card.Title>Welcome to myFlix</Card.Title>
                                <Form onSubmit={handleSubmit} id="signup-form" className="text-center text-white w-100">
                                    <Form.Group controlId="signupUsername" className="mb-1">
                                        <Form.Control type="text" 
                                            placeholder="Enter your Username"
                                            size="sm"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required>
                                        </Form.Control>
                                    </Form.Group>

                                <Form.Group controlId="signupPassword" className="mb-1">
                                        <Form.Control type="password"
                                            placeholder="Type your Password"
                                            size="sm"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required>
                                        </Form.Control>
                                    </Form.Group>

                                <Form.Group controlId="signupEmail" className="mb-1">
                                        <Form.Control type="email"
                                            placeholder="Type your Email"
                                            size="sm"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required>
                                        </Form.Control>
                                    </Form.Group>

                                <Form.Group controlId="signupBirthday" className="mb-2">
                                        <Form.Control type="date"
                                            placeholder="Date of birth"
                                            size="sm"
                                            value={birthday}
                                            onChange={(e) => setBirthday(e.target.value)}
                                            required>
                                        </Form.Control>
                                    </Form.Group>
                                    <div className="mt-2 d-grid">
                                        <Button variant="primary" size="sm" type="submit">Register</Button>
                                    </div>
                            </Form>
                            </Card.Body>
                        </Card>
                    </Card.Group>
                </Col>
            </Row>
        </Container>
    );
};