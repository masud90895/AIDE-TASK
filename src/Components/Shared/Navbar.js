import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then((result) => {
        toast("LogOut!", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#FF0000",
            color: "#fff",
          },
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="flex justify-between p-4 text-xl shadow">
      <div className='hidden md:block'>
        <NavLink
          to="/"
          placeholder="Home"
          className={({ isActive }) =>
            `${isActive ? "underline" : "hover:underline"}`
          }
        >
          Masud
        </NavLink>
      </div>
      <div className="flex md:gap-10 gap-2">
        <a href="#shop">Shop</a> |

        {user?.email === "admin@admin.com" && (
          <NavLink
            to="admin"
            className={({ isActive }) =>
              `${isActive ? "underline" : "hover:underline"}`
            }
          >
            Admin Panel
          </NavLink>
        )} |
        {(user?.email || user?.uid) && (
          <NavLink
            to="cart"
            className={({ isActive }) =>
              `${isActive ? "underline" : "hover:underline"}`
            }
          >
            My Cart
          </NavLink>
        )} |

        {user?.email || user?.uid ? (
          <button
            onClick={handleLogOut}
            className="hover:underline hidden md:block"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="login"
            className={({ isActive }) =>
              `${isActive ? "underline" : "hover:underline hidden md:block"} `
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
