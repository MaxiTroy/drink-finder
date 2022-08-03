import { useState, useEffect, createContext } from "react";
import Axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [idDrink, setIdDrink] = useState("");
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getRecipe = async () => {
      if (!idDrink) return;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
        const { data } = await Axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [idDrink]);

  const getDrinks = async (filters) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filters.name}&c=${filters.category}`;

      const { data } = await Axios.get(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleIdDrink = (id) => {
    setIdDrink(id);
  };

  return (
    <DrinksContext.Provider
      value={{
        getDrinks,
        drinks,
        handleModalClick,
        modal,
        idDrink,
        handleIdDrink,
        recipe,
        loading,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };
export default DrinksContext;
