import { FaSearch, FaBars } from 'react-icons/fa';
import logo from '../images/logo-real-estate.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
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
        <form
          onSubmit={handleSubmit}
          className="rounded-lg p-3 border-solid bg-emerald-500 flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-60 placeholder-emerald-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-emerald-100" />
          </button>
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
            to="/profile"
            className="hidden md:inline"
          >
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
        <FaBars className="inline md:hidden text-emerald-500 mr-2" />
      </div>
    </header>
  );
};

export default Header;
