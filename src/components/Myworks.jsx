import astrodat_logo from "../img/astrodata_logo.svg";
import astroprize_logo from "../img/astroprize_logo.svg";
import eco_logo from "../img/eco_logo.svg";
import cyp_logo from "../img/cyp_logo.svg";
import bookbeats_logo from "../img/bookbeats_logo.svg";
import mmf_logo from "../img/mmf_logo.svg";
import tim_logo from "../img/tim_logo.svg";
import { Link } from "react-router-dom";
import habi_logo from "../img/habi_logo.svg";

function Myworks() {
  return (
    <>
      <div className="h-auto md:h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col justify-center py-10">
        <div className="text-white items-center">
          <div className="justify-center mt-10">
            <h1 className="text-center text-white text-4xl md:text-6xl mb-5 font-bold">
              My projects
            </h1>
            <p className="text-center text-white text-lg md:text-2xl font-regular mb-12 md:mb-24">
              These are some of the projects I've made, check it out!
            </p>

            {/* First row of projects */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
              <Link to="/cyp">
                <img
                  src={cyp_logo}
                  alt="Cyp"
                  className="w-24 h-24 md:w-40 md:h-40 hover:opacity-50 hover:scale-110 transition-transform"
                />
              </Link>
              <Link to="/habi">
                <img
                  src={habi_logo}
                  alt="Habi"
                  className="w-24 h-24 md:w-40 md:h-40 hover:opacity-50 hover:scale-110 transition-transform"
                />
              </Link>
              <Link to="/bookbeats">
                <img
                  src={bookbeats_logo}
                  alt="Bookbeats"
                  className="w-24 h-24 md:w-40 md:h-40 hover:opacity-50 hover:scale-110 transition-transform"
                />
              </Link>
              <Link to="/mmf">
                <img
                  src={mmf_logo}
                  alt="Mmf"
                  className="w-24 h-24 md:w-40 md:h-40 hover:opacity-50 hover:scale-110 transition-transform"
                />
              </Link>
            </div>

            {/* Second row of projects */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center mt-5">
              <Link to="/astrodata">
                <img
                  src={astrodat_logo}
                  alt="Astrodata"
                  className="w-24 h-24 md:w-40 md:h-40 hover:opacity-50 hover:scale-110 transition-transform"
                />
              </Link>
              <Link to="/astroprize">
                <img
                  src={astroprize_logo}
                  alt="Astroprize"
                  className="w-24 h-24 md:w-40 md:h-40 hover:opacity-50 hover:scale-110 transition-transform"
                />
              </Link>
              <Link to="/eco">
                <img
                  src={eco_logo}
                  alt="Eco"
                  className="w-24 h-24 md:w-40 md:h-40 hover:opacity-50 hover:scale-110 transition-transform"
                />
              </Link>
              <Link to="/tim">
                <img
                  src={tim_logo}
                  alt="Tim"
                  className="w-24 h-24 md:w-40 md:h-40 hover:opacity-50 hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myworks;
