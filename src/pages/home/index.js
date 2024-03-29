import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";
import { useContext } from "react";
import "./home.css";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

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
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {loading ? (
        <div>Loading... Please wait!</div>
      ) : recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show, please search for something
          </p>
        </div>
      )}
    </div>
    </>
   
  );
  
}
