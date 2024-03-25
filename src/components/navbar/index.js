import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Navbar() {
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

    console.log(searchParam);
  return (
    <nav className="flex justify-between items-ceter py-8 continer mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold"><strong><i>My</i>FoodApp</strong></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event)=> setSearchParam(event.target.value)}
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
