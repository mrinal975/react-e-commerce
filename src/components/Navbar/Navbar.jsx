import logo from "../../assets/logo.png";
import { FaShoppingCart, FaSearch, FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

function Navbar() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Electronics",
      link: "/#",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

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
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  className="w-[200px]
            sm:w-[200px] first-letter:group-hover:w-[300px]
            transition-all duration-300 rounded-full
            border-gray-300 px-2 py-1
            focus:outline-none focus:border-1
            focus:border-primary"
                />
                <FaSearch
                  className="text-gray-500 group-hover:text-primary 
                absolute top-1/2 -translate-y-1/2 right-3"
                />
              </div>
            </div>
            <button
              onClick={() => alert("order now")}
              className="bg-gradient-to-r from-primary to-secondary 
              transition-all duration-200 text-white py-1 px-4 
              rounded-full flex items-center gap-3 group"
            >
              <span
                className="group-hover:block hidden transition-all
              duration-200"
              >
                Order
              </span>
              <FaShoppingCart
                className="text-xl text-white drop-shadow-sm
              cursor-pointer"
              />
            </button>
            <div className="">
              {/* Dark switch */}
              <DarkMode />
            </div>
          </div>
        </div>
        {/* Upper Navbar */}
        <div className="flex justify-center">
          <ul className="sm:flex gap-4 hidden items-center">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4
                hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Simple Dropdown and Link */}
            <li className="group relative cursor-pointer">
              <a href="" className="flex items-center gap-[2px] py-2">
                Trending Products
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div
                className="absolute z-[9999] hidden group-hover:block
              w-[200px] rounded-md bg-white p-2 text-black shadow-md"
              >
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
