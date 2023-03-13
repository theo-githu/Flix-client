
import React, {useEffect, useState} from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export const UpdateForm = ({ user }) => {
    const storedToken = localStorage.getItem("token");
    const storedMovie = JSON.parse(localStorage.getItem("movies"));
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const [token] = useState(storedToken ? storedToken : null);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();

        const data = {
            Username: username, 
            Password: password, 
            Email: email,
            Birthday: birthday
        };
        console.log(data)

        const updateUser = await fetch(`https://myflix-api-1234.herokuapp.com/users/${user.Username}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        })

        const response = await updateUser.json()
        console.log(response)
        if (response) {
            alert("User information successfully updated! Please log in.");
            localStorage.clear();
            window.location.reload();
        } else {
            alert("Something went wrong! Please try again.");
        }
    };

    const handleDeregister = () => {
        fetch(`https://myflix-api-1234.herokuapp.com/users/${user.Username}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer $(token)`,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Account successfully deleted! Sorry to see you go.");
                localStorage.clear();
                window.location.reload();
            } else {
                alert("Something went wrong! Please try again.");
            }
        });
    }

    return (
        <>
        <h4>Update User Profile</h4>
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control>
                    type="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control>
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control>
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control>
                    type="date"
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                </Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">Save Changees</Button>
        </Form>
        <Button onClick={() => handleDeregister(user._id)} className="button-delete mt-3" type="submit" variant="danger">Delete Account</Button>
        </>
    )
}
