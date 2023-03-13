import React, {useEffect, useState} from "react";
import { Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ProfileView } from "../profile-view/profile-view";
import { MovieCard } from "../movie-card/movie-card";

export const FavouriteMovies = ({user, movies}) => {
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
    }).then(response => response.json())
    .then((response) => {
        console.log("getUser response", response)
        setUsername(response.Username)
        setEmail(response.Email)
        setPassword(response.Password)
        setBirthday(response.Birthday);
        setFavouriteMovies(response.FavouriteMovies)
    })
}
}

