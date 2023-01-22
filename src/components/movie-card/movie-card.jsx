
import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

export const MovieCard = ({ movie }) => {

    return ( 
        <Container>
            <Col>
                <Card className="h-100; moviecardview" bd="dark" text="light" >
                    <Card.Img variant="top" src={movie.ImageURL}/>
                    <Card.Body>
                        <Card.Title className="title">{movie.Title}</Card.Title>
                        <Card.Text className="rating">Rating: {movie.Rating}</Card.Text>
                        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                            <Button className="button-primary">Open</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
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
};

