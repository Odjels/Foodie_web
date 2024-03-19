import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true); // set loading to true before fetching data
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        // assuming its recipes instead of recipe for  multiple results
        console.log(" Before State update:", data.data.recipes);
        setRecipeList(data.data.recipes);
        console.log("Updated Recipe List:", data.data.recipes); // Log the updated state
        setSearchParam("");
      }
      console.log("data");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  console.log(loading, recipeList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
