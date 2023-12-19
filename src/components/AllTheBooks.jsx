import React, { useState } from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import books from '../data/books.json';

const AllTheBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState('fantasy');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const categoryBooks = books[selectedCategory];

  return (
    <div>
      <Form.Group controlId="categorySelect" className='m-3'>
        <Form.Label>Seleziona la categoria:</Form.Label>
        <Form.Control as="select" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="fantasy">Fantasy</option>
          <option value="history">Storia</option>
          <option value="romance">Romanzi</option>
          <option value="scifi">Scifi</option>
        </Form.Control>
      </Form.Group>

      <Row>
        {categoryBooks.map((book) => (
          <Col xs={6} md={4} key={book.asin}>
            <Card className='book-cover'>
              <Card.Img variant='top' src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AllTheBooks;
