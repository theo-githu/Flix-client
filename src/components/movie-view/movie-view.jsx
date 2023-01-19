
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


export const MovieView = ({ movies }) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m._id === movieId);

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={movie.ImageURL}/>
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
                    <Link to={`/`}>
                        <Button className="back-button" variant="primary" size="sm">Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
 };
 
            
      
   