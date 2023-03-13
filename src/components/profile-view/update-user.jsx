
import React, {useEffect, useState} from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export const UpdateUser = ({ storedToken, storedUser }) => {
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [user, setUser] = useState(storedUser ? storedUser : null);

    const [username, setUsername] = useState(user.Username);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(user.Email);
    const [birthday, setBirthday] = useState(user.Birthday);

    const updateUser = (username) => {
        fetch(`https://myflix-api-1234.herokuapp.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => response.json())
        .then((updatedUser) => {
            if (updatedUser) {
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
                window.location.reload();
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch (`https://myflix-api-1234.herokuapp.com/users/${storedUser.Username}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
        )
        .then((response) => {
            if (response.ok) {
                alert('Changes to user profile successful!');
                updateUser(username);
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
        <h4>Update User Profile</h4>
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control>
                    type='text'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder='Enter your username'
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control>
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Create a password'
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control>
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Enter your email'
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control>
                    type='date'
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                </Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">Save Changees</Button>
        </Form>
        </>
    )
}

