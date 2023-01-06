import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 text-xl shadow">
      <NavLink
        to="/"
        placeholder="Home"
        className={({ isActive }) =>
          `${isActive ? "underline" : "hover:underline"}`
        }
      >
        Masud
      </NavLink>
      <NavLink
        to="admin"
        className={({ isActive }) =>
          `${isActive ? "underline" : "hover:underline"}`
        }
      >
        Admin Panel
      </NavLink>
      <NavLink
        to="login"
        className={({ isActive }) =>
          `${isActive ? "underline" : "hover:underline"}`
        }
      >
        Login
      </NavLink>
    </div>
  );
};

export default Navbar;
