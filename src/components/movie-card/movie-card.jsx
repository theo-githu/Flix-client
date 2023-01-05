
import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Card } from "react-bootstrap"

// import './movie-card.scss';

export const MovieCard = ({movie, onMovieClick}) => {
    return ( 
        <Container>
            <Row>
                <Col md={4}>
                    <Card onClick={() => onMovieClick(movie)} className="mb-3">
                        {/* <Card.Img variant="top" src={movie.imageURL}/> */}
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            {/* <Card.Text>{movie.rating}</Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
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
    onMovieClick: PropTypes.func.isRequired
};

