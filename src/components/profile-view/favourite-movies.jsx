import React, {useEffect, useState} from "react";
import { Col, Button, Card } from "react-bootstrap";

import { MovieCard } from "../movie-card/movie-card";

export const FavouriteMovies = ({ storedUser, movies }) => {
    const [user, setUser] = useState(storedUser ? storedUser : null);
    
    let favouriteMovieList = movies.filter((m) =>
    user.FavouriteMovies.includes(m.id)    
    );
    
    return (
        <Row>
            {favouriteMovieList.length === 0 ? (
                <Col>You don't have any favourite movies!</Col>
            ) : (
                <>
                <div className= 'text-start h3 mb-3'>Your Favourite Movies</div>
                {/* {favouriteMovieList.map((movie) => (
                    <Col className='mb-3' key={movie.id}
                    <MovieCard>
                    movieData={movie}
                    user={user}
                    updateUser={(user) => {
                        console.log('Update user', user);
                        setUser(user);
                        localStorage.setItem('user', JSON.stringify(user));
                    }}
                    </MovieCard>
                    </Col>
                ))} */}
                </>
            )}
        </Row>
    )
}

