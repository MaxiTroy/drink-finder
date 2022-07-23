import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategories from "../hooks/UseCategories";
import useDrinks from "../hooks/useDrinks";

const Forms = () => {
  const [search, setSearch] = useState({ name: "", category: "" });
  const [alert, setAlert] = useState("");
  const { categories } = useCategories();
  const { getDrinks } = useDrinks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Please fill out all fields");
      return;
    }
    setAlert("");
    getDrinks(search);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name of Drink</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Vodka, Coofe, etc..."
              name="name"
              value={search.name}
              onChange={(e) =>
                setSearch({ ...search, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Category</Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({ ...search, [e.target.name]: e.target.value })
              }
            >
              <option>Select a Category</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100 "
            type="submit"
          >
            Look for Drinks
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Forms;
