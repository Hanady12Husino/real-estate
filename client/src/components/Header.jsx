import { FaSearch, FaList } from 'react-icons/fa';
import logo from '../images/logo-real-estate.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow-md bg-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link
          to="/"
          className="max-w-[45%] sm:max-w-[13%] 2xl:max-w-[20%]"
        >
          <img
            src={logo}
            alt="logo"
            className=" flex flex-wrap p-2"
          />
        </Link>
        <form className="rounded-lg p-3 border-solid bg-emerald-500 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-60 placeholder-emerald-100"
          />
          <FaSearch className="text-emerald-100" />
        </form>
        <ul className="flex gap-4 text-emerald-500 mr-5">
          <Link
            to="/"
            className="hidden md:inline"
          >
            <li className="hover:underline">Home</li>
          </Link>
          <Link
            to="/about"
            className="hidden md:inline"
          >
            <li className="hover:underline">About</li>
          </Link>
          <Link
            to="/sign-in"
            className="hidden md:inline"
          >
            <li className="hover:underline">Sign in</li>
          </Link>
        </ul>
        <FaList className="inline md:hidden text-emerald-500 mr-2" />
      </div>
    </header>
  );
};

export default Header;
