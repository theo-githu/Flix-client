
import React from "react";

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
           <div>
                <img src={movie.ImageURL} />
            </div>
            <div>
                <span>Title:</span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Description:</span>
                <span>{movie.Description}</span>
            </div>
            <div>
                <span>Genre:</span>
                <span>{movie.Genre.Name}</span>
                <span>{movie.Genre.Description}</span>
            </div>
            <div>
                <span>Director:</span>
                <span>{movie.Director.Name}</span>
                <span>{movie.Director.Bio}</span>
            </div>

            <div>
                <span>Rating:</span>
                <span>{movie.Rating}</span>
            </div>
          <button onClick={onBackClick}>Back</button>
        </div>
      );
    };