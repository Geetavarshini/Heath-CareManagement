import { NavLink } from "react-router-dom";
import {
  useNavigate
} from "react-router-dom";
import {
  Menu
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    targetId: "home"
  },
  {
    label: "Services",
    targetId: "services"
  },
  {
    label: "Doctors",
    targetId: "doctors"
  },
  {
    label: "Branches",
    targetId: "branches"
  },
  {
    label: "Contact",
    targetId: "contact"
  }
];

function Navbar({ toggleSidebar }) {

  const navigate =
    useNavigate();

  const scrollToSection =
    (targetId) => {

      const scroll = () => {

        document
          .getElementById(targetId)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

      };

      if (window.location.pathname !== "/") {

        navigate("/");
        setTimeout(scroll, 100);

      }

      else {

        scroll();

      }

    };

  return (

    <nav className="relative z-50 h-20 sm:h-24 border-b border-white/10

    bg-[#070B1D]/90 backdrop-blur-xl">

      <div className="max-w-[1600px] mx-auto h-full px-3 sm:px-6 lg:px-12

      flex items-center justify-between">

        {/* LEFT */}

        <div className="flex items-center gap-2 sm:gap-6">

          {/* BURGER */}

          <button

            onClick={toggleSidebar}

            className="group w-11 h-11 sm:w-14 sm:h-14 rounded-2xl

            bg-white/5 border border-white/10

            flex items-center justify-center

            hover:bg-cyan-400/10 transition duration-300"

          >

            <Menu
              size={24}
              className="text-cyan-300"
            />

          </button>

          {/* LOGO */}

          <div className="flex items-center gap-2 sm:gap-4">

            {/* LOGO ICON */}

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-40 rounded-full" />

              <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-2xl

              bg-gradient-to-br from-cyan-300 to-blue-500

              flex items-center justify-center

              text-black text-lg sm:text-2xl font-black

              shadow-xl shadow-cyan-500/30">

                C

              </div>

            </div>

            {/* BRAND */}

            <div>

              <h1 className="text-xl sm:text-3xl font-black tracking-tight">

                <span className="text-white">

                  Care

                </span>

                <span className="text-cyan-400">

                  Sync

                </span>

              </h1>

              <p className="hidden sm:block text-xs uppercase tracking-[0.35em] text-gray-500 mt-1">

                Intelligent Healthcare

              </p>

            </div>

          </div>

        </div>

        {/* CENTER LINKS */}

        <div className="hidden xl:flex items-center gap-10">

          {navItems
          .map(({ label, targetId }) => (

            <button

              key={targetId}

              type="button"

              onClick={() =>
                scrollToSection(targetId)
              }

              className="text-gray-300 hover:text-cyan-400

              transition duration-300 font-medium"

            >

              {label}

            </button>

          ))}

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-2 sm:gap-4">

          {/* LOGIN */}

          <NavLink to="/login">

  <button className="flex h-10 sm:h-12 px-3 sm:px-6 rounded-2xl bg-white/5 border border-white/10 items-center justify-center text-gray-200 text-sm sm:text-base font-semibold hover:bg-white/10 transition duration-300">
        Login
    </button>

</NavLink>

          {/* REGISTER */}

          <NavLink to="/register">

         <button className="h-10 sm:h-12 px-3 sm:px-7 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm sm:text-base font-black hover:scale-105 transition duration-300 shadow-xl shadow-cyan-500/20">
            Register

        </button>

</NavLink>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;
