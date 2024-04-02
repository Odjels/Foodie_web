import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([])

  const navigate = useNavigate() // Using useNavigate hook from React Router

  async function handleSubmit(event) {
    event.preventDefault(); // Preventing the default form submission behavior
    setLoading(true); // set loading to true before fetching data
    try {
      const res = await fetch( // Fetching recipe data from an API endpoint
       // 'www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}'
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json(); // Parsing the response data as JSON
      if (data?.data?.recipes) { // Checking if recipes data exists in the response
        // assuming its recipes instead of recipe for  multiple results
        console.log(" Before State update:", data.data.recipes); // Updating recipe list state with fetched data
        setRecipeList(data.data.recipes);  // Updating recipe list state with fetched data
        console.log("Updated Recipe List:", data.data.recipes); // Log the updated state
        setSearchParam("");  // Resetting search parameter
        navigate('/home')  // Navigating to '/home' route
      }
      console.log("data");
    } catch (e) {
      console.log(e);  // Logging any errors that occur during the fetch operation
    } finally {
      setLoading(false);  // Setting loading state to false after fetching data
    }
  }

  function handleAddToFavourite(getCurrentItem){
    console.log(getCurrentItem);
    let cpyFavouritesList = [...favouritesList];
    const index = cpyFavouritesList.findIndex(item=> item.id === getCurrentItem.id)

    if(index === -1) {
      cpyFavouritesList.push(getCurrentItem)
    } else {
      cpyFavouritesList.splice(index) //copying the favourites list
    }

    setFavouritesList(cpyFavouritesList)
  }

  console.log(favouritesList, 'favouritesList');

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
        handleAddToFavourite,
        favouritesList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
