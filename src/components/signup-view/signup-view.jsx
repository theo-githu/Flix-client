import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            } else {
                alert("Signup failed");
            }
        });
    };

    return (
        <Container id="main-container" className="d-grid h-35">
            <Form onSubmit={handleSubmit} id="signup-form" className="text-center text-white w-100">
                <h1 className="mb-3 fs-3 fw-normal">Register</h1>

                <Form.Group controlId="signupUsername" className="mb-1">
                    <Form.Control type="text" 
                        placeholder="Username"
                        size="sm"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required>
                    </Form.Control>
                </Form.Group>

              <Form.Group controlId="signupPassword" className="mb-1">
                    <Form.Control type="password"
                        placeholder="Password"
                        size="sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required>
                    </Form.Control>
                </Form.Group>

             <Form.Group controlId="signupEmail" className="mb-1">
                    <Form.Control type="email"
                        placeholder="Email address"
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
                    <Button variant="primary" size="sm" type="submit">Submit</Button>
                </div>
           </Form>
        </Container>
    );
};