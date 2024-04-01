import { NavLink } from "react-router-dom";


export default function Navbar() {
    
  return (
    <nav className="flex justify-between items-ceter py-8 continer mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold"><strong><i>My</i>FoodApp</strong></h2>
     
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-699 duration-300"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/home"}
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
