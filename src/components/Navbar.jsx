import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ThemeController from "./ThemeController";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch(() => {
        toast.error("Logout failed!");
      });
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "py-2 px-8 bg-violet-600 text-white font-semibold"
      : "hover:text-violet-600 text-gray-500 font-semibold";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-white bg-violet-600 px-3 py-1 rounded"
      : "hover:bg-gray-200 text-gray-500 font-semibold";

  return (
    <>
      {/**Desktop Navbar */}
      <div className="navbar bg-base-100 shadow-sm md:fixed md:z-10">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/8gTFHCdb/game-nest-removebg-preview.png"
            alt="GameNest-logo"
            className="w-20 h-20"
          />
        </div>

        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-5">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/reviews" className={navLinkClass}>
              All Reviews
            </NavLink>

            {user && (
              <div className="flex gap-5 items-center">
                <NavLink to="/addReview" className={navLinkClass}>
                  Add Review
                </NavLink>
                <NavLink to="/myReviews" className={navLinkClass}>
                  My Reviews
                </NavLink>
                <NavLink to="/myWatchlist" className={navLinkClass}>
                  Game WatchList
                </NavLink>
              </div>
            )}

            <ThemeController />

            {!user ? (
              <div className="flex gap-5">
                <NavLink to="/login" className="btn bg-violet-600 text-white">
                  Login
                </NavLink>
                <NavLink to="/register" className="btn bg-violet-600 text-white">
                  Register
                </NavLink>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                  <img src={user?.photoURL} alt="" className="rounded-full w-12 h-12" />
                </div>
                <NavLink onClick={logout} className="btn bg-violet-600 text-white">
                  LogOut
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/**Mobile Navbar */}
        <div className="md:hidden navbar-end">
          <ThemeController />
        </div>
        <div className="md:hidden ml-4">
          <button onClick={() => setShowMenu(!showMenu)} className="m-1 text-3xl">
            {showMenu ? <RxCross2 /> : <IoMenu />}
          </button>
        </div>

        {showMenu && (
          <div className="absolute top-20 left-0 w-screen bg-base-100 z-50 shadow-lg flex flex-col px-6 py-4 space-y-3 border border-gray-300 md:hidden">
            <NavLink to="/" className={mobileLinkClass}>
              Home
            </NavLink>
            <NavLink to="/reviews" className={mobileLinkClass}>
              All Reviews
            </NavLink>

            {user && (
              <div className="flex flex-col space-y-3">
                <NavLink to="/addReview" className={mobileLinkClass}>
                  Add Review
                </NavLink>
                <NavLink to="/myReviews" className={mobileLinkClass}>
                  My Reviews
                </NavLink>
                <NavLink to="/myWatchlist" className={mobileLinkClass}>
                  Game WatchList
                </NavLink>
              </div>
            )}

            {!user ? (
              <div className="flex flex-col space-y-3">
                <NavLink to="/login" className="font-semibold text-violet-600">
                  Login
                </NavLink>
                <NavLink to="/register" className="font-semibold text-violet-600">
                  Register
                </NavLink>
              </div>
            ) : (
              <div className="flex flex-col space-y-3">
                <div className="tooltip tooltip-open tooltip-right w-10 tooltip-success" data-tip={`${user.displayName}`}>
                  <img src={user?.photoURL} alt="" className="rounded-full w-10 h-10" />
                </div>
                <NavLink onClick={logout} className="font-semibold text-violet-600">
                  LogOut
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
