
import React, {useEffect, useState} from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserInfo from "./user-info";
import FavouriteMovies from "./favourite-movies";
import UpdateUser from "./update-user";

export const ProfileView = ({ movies }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const storedToken = localStorage.getItem("token");
    const [token, setToken] = useState(storedToken ? storedToken : null);
    
    const [username, setUsername] = useState(user.Username)
    const [password, setPassword] = useState();
    const [email, setEmail] = useState(user.Email);

    function handleResponse(response) {
        re
    }
    }

    const getUser = () => {

    }
    const handleSubmit = (e) => {

    }
    const removeFavourite = (id) => {

    }
    const handleUpdate = (e) => {

    };

    useEffect(() => {

    }, [])

    return (
        <Container>
            <UserInfo name={user.Username} email={user.Email} />
            <FavouriteMovies favouriteMovieList={favouriteMovieList} />
            <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
        </Container>
    );
}