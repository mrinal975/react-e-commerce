import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <div
        className="shadow-md bg-white 
       dark:text-white 
       duration-200 relative z-40"
      >
        {/* Upper Navbar */}
        <div className="bg-primary/40 py-2">
          <div
            className="container flex
          justify-between items-center"
          >
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={logo} alt="Logo" className="w-10" />
                Shopsy
              </a>
            </div>
            {/* Search Bar and other button */}
            <div>
              <div className="relative group   sm:block">
                <input
                  type="text"
                  className="w-[200px]
            sm:w-[200px] first-letter:group-hover:w-[300px]
            transition-all duration-300 rounded-full
            border-gray-300 px-2 py-1
            focus:outline-none focus:border-1
            focus:border-primary"
                />
                <CiSearch
                  className="text-gray-500 group-hover:text-primary 
                absolute top-1/2 -translate-y-1/2 right-3"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Upper Navbar */}
        <div></div>
      </div>
    </>
  );
}

export default Navbar;
