import { Container } from "react-bootstrap";
import Forms from "./components/Forms";
import { CategoriesProvider } from "./context/CategoriesProvider";

function App() {
  return (
    <CategoriesProvider>
      <header className="py-5">
        <h1>Find Your Cocktail</h1>
      </header>

      <Container className="mt-4">
        <Forms />
      </Container>
    </CategoriesProvider>
  );
}

export default App;
