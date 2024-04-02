import { GlobalContext } from "../../context";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  // Extracting 'id' parameter from URL using React Router's useParams hook
  const { id } = useParams();
  // Destructuring necessary data and functions from context
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favouritesList,
    handleAddToFavourite,
  } = useContext(GlobalContext);

  // Fetch recipe details from API when component mounts
  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          // 'www.themealdb.com/api/json/v1/1/lookup.php?i=${id}'
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();

        console.log("Recipe Details Data:", data);
        //console.log(data);
        if (data?.data) {
          // Update state with fetched recipe details data
          setRecipeDetailsData(data?.data);
        }
      } catch (error) {
        // Handle any errors that occur during fetch
        console.error("Error fetching recipe details:", error);
      }
    }
    getRecipeDetails();
  }, []);  // Dependency array is empty, so this effect runs only once on component mount

  console.log(recipeDetailsData, "recipeDetailsData"); // Log recipeDetailsData to check if it's fetched correctly

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavourite(recipeDetailsData?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {/* Conditionally render button text based on whether recipe is in favorites */}
            {favouritesList &&
            favouritesList.length > 0 &&
            favouritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favourites" // this would change to remove if the recipe is added already
              : "Add to favourites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {/* Map through ingredients and render each */}
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Cooking Procedures:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.procedures?.map(
              (
                procedure,
                index // Add optional chaining here
              ) => (
                <li key={index}>
                  <span className="text-xl font-semibold text-black">
                    {procedure.step}
                  </span>
                  <span className="text-xl font-semibold text-black">
                    {procedure.description}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
