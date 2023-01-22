
import React from "react";
import { Link } from "react-router-dom";

function FavouriteMovies ({ favouriteMovieList }) {
    return (
        <div>
            <h2>Your Favourite Movies</h2>
            {favouriteMovieList.map((movies) => {
                return (
                    <div key={movies._id}>
                        <img src={movies.ImageURL} />
                        <Link to={`/movies/${movies._id}`}>
                            <h4>{movies.Title}</h4>
                        </Link>
                        <button variant="secondary" onClick={() => removeFavourite(movies._id)}>Remove from favourites</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default FavouriteMovies