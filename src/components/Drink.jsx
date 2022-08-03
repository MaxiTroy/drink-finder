import { Col, Card, Button } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const Drink = ({ drink }) => {
  const { handleModalClick, handleIdDrink } = useDrinks();

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={drink.strDrinkThumb}
          alt={`Image ${drink.strDrink}`}
        />

        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>

          <Button
            className="w-100 text-uppercase mt-2 "
            variant="warning"
            onClick={() => {
              handleModalClick();
              handleIdDrink(drink.idDrink);
            }}
          >
            See Recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Drink;
