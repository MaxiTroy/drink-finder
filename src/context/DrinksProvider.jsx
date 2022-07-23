import { useState, useEffect, createContext } from "react";
import Axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const getDrinks = async (filters) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filters.name}&c=${filters.category}`;

      const { data } = await Axios.get(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DrinksContext.Provider value={{ getDrinks, drinks }}>
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };
export default DrinksContext;
