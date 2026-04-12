import React from "react";
import { Link } from "react-router";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <section className="py-5 absolute w-full left-0 top-0 z-10">
        <div className="container flex justify-between items-center">
          <div className="image">
            <Link to="/">
              <img src="/logo.png" alt="main logo" />
            </Link>
          </div>
          <div className="nav">
            <ul className="flex items-center gap-8 text-xl font-bold ">
              <li>
                <a href="">Product</a>
              </li>
              <li>
                <a href="">Customers</a>
              </li>
              <li>
                <a href="">Priceing</a>
              </li>
              <li>
                <a href="">Learn</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Button className="border-black border-3 bg-transparent text-xl font-bold px-3 py-2 ">Log In</Button>
            <Button className=" text-xl font-bold px-3 py-2 ">Sign Up</Button>
          </div>
        </div>
    </section>
  );
};

export default Navbar;
