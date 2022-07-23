import { Button, Form, Row, Col } from "react-bootstrap";

const Forms = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name of Drink</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Vodka, Coofe, etc..."
              name="name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Category</Form.Label>
            <Form.Select id="category" name="category">
              <option>Select a Category</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Forms;
