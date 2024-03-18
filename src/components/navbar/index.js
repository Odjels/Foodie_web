import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-ceter py-8 continer mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">FoodRecipe</h2>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Enter Items..."
          className="bg-white/69 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shodow-red-200 "
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-699 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-699 duration-300"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}