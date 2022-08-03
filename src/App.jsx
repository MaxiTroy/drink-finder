import { Container } from "react-bootstrap";
import Forms from "./components/Forms";
import ListDrinks from "./components/ListDrinks";
import ModalDrink from "./components/ModalDrink";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Find Your Cocktail</h1>
        </header>

        <Container className="mt-4">
          <Forms />
          <ListDrinks />
          <ModalDrink />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;
