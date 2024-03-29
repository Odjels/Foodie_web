import React from "react";
import "./footer.css";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 className="text-2xl font-semibold">FoodRecipe</h2>
          <p>
            Your nurishment is our concern!
            <br /> Choose from our diverse meals, featuring a delectable array
            of dishes and their recipe
          </p>
          <div className="footer-social-icons"> </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/favourites"}>Favourites</Link>
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+2347031947279</li>
            <li>contact@my_food.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ my_food.com - All Right Reserved.
      </p>
    </div>
  );
}
