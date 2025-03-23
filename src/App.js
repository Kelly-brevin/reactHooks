import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import { Button, Form, Container } from "react-bootstrap";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://via.placeholder.com/150",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A journey through space and time.",
      posterURL: "https://via.placeholder.com/150",
      rating: 4,
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchRating === "" || movie.rating.toString() === searchRating)
  );

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  };

  return (
    <Container>
      <h1 className="text-center my-4">My Movie App</h1>

      <Filter
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
      />

      <MovieList movies={filteredMovies} />

      <h3 className="mt-4">Add a New Movie</h3>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterURL: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: e.target.value })
            }
          />
        </Form.Group>
        <Button className="mt-2" onClick={addMovie}>
          Add Movie
        </Button>
      </Form>
    </Container>
  );
};

export default App;
