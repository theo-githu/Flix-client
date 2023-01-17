
import React from "react";

import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

    useEffect(() => {
      if (!token) {
        return;
      }

        fetch("https://myflix-api-1234.herokuapp.com/movies", { 
          headers: {Authorization: `Bearer ${token}`}
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("movies from api:", data)
            const moviesfromAPI = data.map((movie) => {
              return {
                id: movie._id,
                image: movie.ImageURL,
                title: movie.Title,
                description: movie.Description,
                genre: movie.Genre.Name,
                director: movie.Director.Name,
                rating: movie.Rating
              }
            })
            setMovies(data)
          })
      }, [token]);


      return (
        <Row className="justify-content-md-center"> 
          {!user ? (
            <Col md={5} className="mt-4 mb-4">
              <LoginView onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
              }} />
              <br></br>
              <SignupView />
            </Col>
          ) : selectedMovie ? (
            <Col md={8} className="mt-3">
              <MovieView 
              movie={selectedMovie} 
              onBackClick={() => setSelectedMovie(null)} 
            />
            </Col>
            ) : movies.length === 0 ? (
              <div>The list is empty!</div>
            ) : (
              <>
                {movies.map((movie) => (
                  <Col key={movie.id} md={6} className="mb-3">
                    <MovieCard
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                    }}
                    />
                  </Col>
                ))}
              </>
            )}
          </Row>
      );
};

<button onClick={() => {setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
 

