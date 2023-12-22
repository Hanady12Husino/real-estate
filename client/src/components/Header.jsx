import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo-real-estate.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaRegEnvelope, FaPhone } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  const handleMenu = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className="shadow-md bg-white">
      <div className="lg:block hidden bg-emerald-900 text-emerald-100 py-2">
        <div className="container mx-auto lg:flex hidden items-center justify-between px-3">
          <span className="flex items-center gap-x-1">
            <GoLocation />
            <p className="text-sm">The first street</p>
          </span>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1">
              <FaPhone />
              <p className="text-sm">+1 34-343-232</p>
            </span>
            <span className="flex items-center gap-x-1">
              <FaRegEnvelope />
              <p className="text-sm">info@hanadyhusino.com</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link
          to="/"
          className="max-w-[30%] sm:max-w-[13%] 2xl:max-w-[20%]"
        >
          <img
            src={logo}
            alt="logo"
            className=" p-2"
          />
        </Link>
        <form
          onSubmit={handleSubmit}
          className="rounded-full p-3 border-emerald-500 border-[1px] border-solid  flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 md:w-60 placeholder-emerald-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-emerald-500" />
          </button>
        </form>
        <div>
          <ul className="md:flex md:items-center gap-2 md:gap-4 text-emerald-500 md:mr-5">
            <Link
              to="/"
              className="hidden md:inline"
            >
              <li className="hover:text-emerald-900  duration-500 uppercase">
                Home
              </li>
            </Link>
            <Link
              to="/about"
              className="hidden md:inline"
            >
              <li className="hover:text-emerald-900  duration-500 uppercase">
                About
              </li>
            </Link>
            <Link
              to="/contact-us"
              className="hidden md:inline"
            >
              <li className="hover:text-emerald-900  duration-500 uppercase">
                Contact
              </li>
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <li className="hover:text-emerald-900  duration-500 uppercase -mr-5 md:mr-0">
                  Sign in
                </li>
              )}
            </Link>
            <Link to={'/create-listing'}>
              <button className="bg-emerald-500 text-emerald-50 duration-500 px-6 py-2 hover:bg-emerald-900 hover:text-emerald-100 rounded-full hidden md:inline ">
                Add Property
              </button>
            </Link>
          </ul>
        </div>
        <div className="mr-2 flex md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-emerald-500 hover:text-emerald-900"
            type="button"
            onClick={handleMenu}
          >
            {toggle === true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {toggle ? (
        <div className="md:hidden">
          <div className="ox-2 p-6 space-y-1 sm:px-3">
            <ul className="flex flex-col items-start gap-4 text-emerald-500 ">
              <Link to="/">
                <li className="hover:text-emerald-100 block hover:bg-emerald-500 duration-500 uppercase">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="hover:text-emerald-900  duration-500 uppercase">
                  About
                </li>
              </Link>
              <Link to="/contact-us">
                <li className="hover:text-emerald-900  duration-500 uppercase">
                  Contact
                </li>
              </Link>
              <Link to={'/create-listing'}>
                <button className="bg-emerald-500 text-emerald-100 duration-500 px-6 py-2 hover:bg-emerald-900 rounded-full ">
                  Add Property
                </button>
              </Link>
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
