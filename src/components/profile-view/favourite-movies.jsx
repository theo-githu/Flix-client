import React, {useEffect, useState} from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

import { MovieCard } from "../movie-card/movie-card";

export const FavouriteMovies = ({ user, favMovies }) => {
    
    const favouriteMovies = favMovies.map((movie) => {
        return {
            id: movie._id,
            title: movie.Title,
            image: movie.ImageURL,
            description: movie.Description,
            genre: movie.Genre,
            director: movie.Director
        };
    });

    return (
        <Row>
            {favouriteMovies.length === 0 ? (
                <Col>You don't have any favourite movies!</Col>
            ) : (
                <>
                <Card className="bg-light mt-3">
                    <Card.Title className="fw-bold fs-2">Your Favourite Movies</Card.Title>
                    <Card.Body>
                        <Row>
                            {favouriteMovies.map((movie) => (
                                <Col className="mb-3" key={movie.id} md={3}>
                                    <MovieCard movie={movie} user={user} />
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>
                </>
            )}
        </Row>
    )
}

