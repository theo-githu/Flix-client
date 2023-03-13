
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { MovieCard } from "../movie-card/movie-card";

export const MovieView = ({ movies, user }) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m._id === movieId);



    return (
        <Container>
            <Row>
                <Card bg="dark" text="light">
                    <Card.Body>
                        <Card.Img variant="top" className="w-100" src={movie.ImageURL}/>
                        <Card.Title className=" fw-bold mt-3">{movie.Title}</Card.Title>
                        <Card.Text className="fw-light">{movie.Description}</Card.Text>
                        <Card.Text className="fw-bolder mb-1">Genre: </Card.Text>
                        <Card.Text className="fw-light mt-1">{movie.Genre.Name} </Card.Text>
                        <Card.Text className="fw-bolder mb-1">Definition of Genre: </Card.Text>
                        <Card.Text className="fw-light mt-1">{movie.Genre.Description}</Card.Text>
                        <Card.Text className="fw-bolder mb-1">Director: </Card.Text>
                        <Card.Text className="fw-light mt-1">{movie.Director.Name}</Card.Text>
                        <Card.Text className="fw-bolder mb-1">IMDb Rating: </Card.Text>
                        <Card.Text className="fw-light mt-1">{movie.Rating}</Card.Text>
                        {/* <Button 
                            className="fav-btn"
                            size="sm"
                            variant="secondary"
                            onClick={addFavourite(movie._id)}
                            >
                            Add to Favourites
                        </Button> */}
                        <Link to={`/`}>
                            <Button className="back-button" variant="primary" size="sm">Back</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
 };
 
            
      
   