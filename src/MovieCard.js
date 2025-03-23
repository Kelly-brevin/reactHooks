import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>⭐ {movie.rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
