import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";
import { useContext } from "react";
import "./home.css";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  console.log(searchParam);

  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h2>We Provide food recipe with ease!</h2>
          <p>
            Your nurishment is our concern! Choose from our diverse meals,
            featuring a delectable array of dishes and their recipes
          </p>
        </div>
      </div>
      <div className="flex justify-between items-ceter py-8 continer mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Enter Items..."
            className="bg-white/69 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shodow-red-200 "
          />
        </form>
      </div>

      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {loading ? ( // If loading is true
          <div>Loading... Please wait!</div> // Display a loading message
        ) : recipeList && recipeList.length > 0 ? ( // If loading is false and there are recipes available
          recipeList.map(
            (
              item,
              index // Mapping over the recipeList array
            ) => (
              <RecipeItem key={index} item={item} /> // Render a RecipeItem component for each recipe
            )
          )
        ) : (
          // If loading is false but there are no recipes available
          // render nothing
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              No Recipe yet, please search for something
            </p>
          </div>
        )}
      </div>
    </>
  );
}
