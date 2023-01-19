
import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  // const [selectedMovie, setSelectedMovie] = useState(null);
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
        <BrowserRouter>
          <Row className="justify-content-md-center"> 
            <Routes>
              <Route
                path="/signup"
                element={
                  <>
                    {!user ? (
                      <Navigate to="/" />
                    ) : (
                      <Col md={5}>
                        <SignupView/>
                      </Col>
                    )}
                  </>
                }/>
                <Route
                  path="/login"
                  element={
                    <>
                     {!user ? (
                      <Navigate to="/" />
                     ) : (
                      <Col md={5}>
                        <LoginView onLoggedIn={(user, token) => {
                        setUser(user);
                        // setToken(token)
                        }} />
                     </Col>
                    )}
                    </>
                  }/>
                  <Route
                    path="/movies/:movieId"
                    element={
                      <>
                        {!user ? (
                          <Navigate to="/login" replace />
                          ) : movies.length === 0 ? (
                            <Col>The list is empty!</Col>
                          ) : (
                            <Col md={8} className="mt-3">
                            <MovieView 
                            movies={movies} 
                            // onBackClick={() => setSelectedMovie(null)} 
                          />
                          </Col>
                        )}
                      </>
                    }
                  />
                  <Route
                    path="/"
                    element={
                      <>
                        {!user ? (
                          <Navigate to="/login" replace />
                          ) : movies.length === 0 ? (
                            <Col>The list is empty!</Col>
                          ) : (
                            <>
                              {movies.map((movie) => (
                              <Col key={movie._id} md={6} className="mb-3">
                              <MovieCard
                              movie={movie}
                              // onMovieClick={(newSelectedMovie) => {
                              // setSelectedMovie(newSelectedMovie);
                              // }}
                              />
                             </Col>
                             ))}   
                            </>
                        )}
                      </>
                    }
                  />
            </Routes>
          </Row>
        </BrowserRouter>
      );
};

export default MainView;

/* <button onClick={() => {setUser(null); setToken(null); localStorage.clear(); }}>Logout</button> */
 

