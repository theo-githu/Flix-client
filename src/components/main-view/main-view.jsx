import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://openlibrary.org/search.json?q=star+wars")
          .then((response) => response.json())
          .then((data) => {
            console.log("books from api:", data);
          });
      }, []);

    const [selectedMovie, setSelectedMovie] = useState(null);

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
