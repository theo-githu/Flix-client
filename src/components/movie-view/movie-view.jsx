
import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// import './movie-view.scss';

export const MovieView = ({ movie }) => {
    const { bookId } = useParams();

    const movie = movies.find((b) => b.id === movie.Id);

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Img className="w-100" variant="top" src={movie.ImageURL}/>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Card.Text>Genre: {movie.Genre.Name} </Card.Text>
                    <Card.Text>Definition of Genre: {movie.Genre.Description}</Card.Text>
                    <Card.Text>Director: {movie.Director.Name}</Card.Text>
                    <Card.Text>IMDb Rating: {movie.Rating}</Card.Text>
                    <Link to={`/`}>
                        <Button className="back-button" variant="primary" size="sm">Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
 };
 
            
      
   