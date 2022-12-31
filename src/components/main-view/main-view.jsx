
import React from "react";

import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch("https://myflix-api-1234.herokuapp.com/movies")
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
      }, []);

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
  };
