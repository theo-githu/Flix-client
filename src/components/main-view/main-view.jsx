
import React from "react";

import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

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

      if (!user) {
        return (
          <>
            <LoginView onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }} />
            or
            <SignupView />
          </>
        );
      }

    if (selectedMovie) {
      return (<MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
      );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
      } else 
      {
        return (
        <div>
         {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
          }}
          />
          ))}
        </div>
    )};
    <button onClick={() => {setUser(null); setToken(null); 
    localStorage.clear(); }}>Logout</button>
  };
