
import React, {useEffect, useState} from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import FavouriteMovies from "./favourite-movies";
import UpdateUser from "./update-user";

export const ProfileView = ({ user, movies }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const storedMovie = JSON.parse(localStorage.getItem("movies"));

    const [token] = useState(storedToken ? storedToken : null);
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState("");
    const [favouriteMovies, setFavouriteMovies] = useState([]);

    const getUser = (token) => {
        fetch(`https://myflix-api-1234.herokuapp.com/users/${user.Username}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`},
        }), then(response => response.json())
        .then((response) => {
            console.log("getUser response", response)
            setUsername(response.Username);
            setEmail(response.Email);
            setPassword(response.Password);
            setBirthday(response.Birthday);
            setFavouriteMovies(response.FavouriteMovies)
        })
    }
    console.log("userFavouriteMovie", favouriteMovies)

    useEffect(() => {
        getUser(token);
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div>
                                <h5>User Information</h5>
                                <p>Username: {username}</p>
                                <p>Email: {email}</p>
                                <p>Birthday: {birthday}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <UpdateForm user={user} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <FavouriteMovies user={user} movies={movies} />
            </Row>
        </Container>
    );
}

{/* <UserInfo name={user.Username} email={user.Email} />
<FavouriteMovies favouriteMovieList={favouriteMovieList} />
<UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} /> */}