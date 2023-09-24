import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="text-sm font-bold gap-4 md:gap-12 menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
