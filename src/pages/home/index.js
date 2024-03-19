import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  return (
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
  );
  
}
