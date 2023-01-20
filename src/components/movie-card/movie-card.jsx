
import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export const MovieCard = ({ movie }) => {

    return ( 
    <Card className="h-100 text-center" >
        <Card.Img variant="top" src={movie.ImageURL}/>
        <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text className="fw-light">Rating: {movie.Rating}</Card.Text>
            <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                <Button className="button-primary">Open</Button>
            </Link>
        </Card.Body>
    </Card>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageURL: PropTypes.string.isRequired,
        Rating: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired
        })
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};

