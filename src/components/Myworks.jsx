import astrodat_logo from "../img/astrodata_logo.svg";
import astroprize_logo from "../img/astroprize_logo.svg";
import eco_logo from "../img/eco_logo.svg";
import cyp_logo from "../img/cyp_logo.svg";
import bookbeats_logo from "../img/bookbeats_logo.svg";
import mmf_logo from "../img/mmf_logo.svg";
import tim_logo from "../img/tim_logo.svg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Myworks() {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col  justify-center ">
        <div className="  text-white items-center">
          <div className="justify-center mt-10">
            <h1 className="text-center text-white text-6xl font-bold">My projects</h1>
            <p className="text-center text-white text-2xl font-regular mb-24">These are some of the projects i've made, check it out!</p>
            <div className="flex place-content-around">
              <Link to="/cyp">
                {" "}
                <img
                  src={cyp_logo}
                  alt="Cyp"
                  className="w-40 h-40 hover:opacity-50 hover:scale-110"
                />{" "}
              </Link>
              <Link to="/bookbeats">
                <img
                  src={bookbeats_logo}
                  alt="Bookbeats"
                  className="w-40 h-40 hover:opacity-50 hover:scale-110"
                />
              </Link>
              <Link to="/mmf">
                {" "}
                <img
                  src={mmf_logo}
                  alt="Mmf"
                  className="w-40 h-40 hover:opacity-50 hover:scale-110"
                />
              </Link>
            </div>

            <div className="flex place-content-around mt-5">
              <Link to="/astrodata">
                <img
                  src={astrodat_logo}
                  alt="Astrodata"
                  className="w-40 h-40 hover:opacity-50 hover:scale-110"
                />
              </Link>
              <Link to="/astroprize">
                <img
                  src={astroprize_logo}
                  alt="Astroprize"
                  className="w-40 h-40 hover:opacity-50 hover:scale-110"
                />
              </Link>
              <Link to="/eco">
                <img
                  src={eco_logo}
                  alt="Eco"
                  className="w-40 h-40 hover:opacity-50 hover:scale-110"
                />
              </Link>
              <Link to="/tim">
                <img
                  src={tim_logo}
                  alt="Astrodata"
                  className="w-40 h-40 hover:opacity-50 hover:scale-110"
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
