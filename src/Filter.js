import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";

const Filter = ({ setSearchTitle, setSearchRating }) => {
  return (
    <div className="m-3">
      <InputGroup className="mb-3">
        <InputGroup.Text>Title</InputGroup.Text>
        <FormControl
          type="text"
          placeholder="Search by title"
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Rating</InputGroup.Text>
        <Form.Select onChange={(e) => setSearchRating(e.target.value)}>
          <option value="">All</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </Form.Select>
      </InputGroup>
    </div>
  );
};

export default Filter;
