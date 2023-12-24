import { Link } from 'react-router-dom';
import footerLogo from '../images/footerLogo.png';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="">
      <div className="bg-emerald-900  flex flex-col sm:flex-row pt-4 pb-10">
        <div className="flex flex-1 flex-col  px-4 items-center sm:items-start">
          <Link to="/">
            <img
              src={footerLogo}
              alt="logo"
              className="w-[200px]"
            />
          </Link>
          <p className="text-sm text-emerald-100  md:pr-8 lg:pr-28 pb-4 mt-[-10px] text-center sm:text-left font-weight-[200]">
            Elevate your real estate experience with Home Real Estate Agency. We
            turn your dreams into keys, unlocking a world of possibilities.
          </p>
          <div className="flex gap-2 text-emerald-100">
            <p>Follow us:</p>
            <ul className="flex gap-2 items-center text-center">
              <li className="text-lg text-emerald-100 opacity-95 hover:scale-125 hover:rotate-12">
                <FaGithub />
              </li>
              <li className="text-lg text-emerald-100 opacity-95 hover:scale-125 hover:rotate-12">
                <FaFacebook />
              </li>
              <li className="text-lg text-emerald-100 opacity-95 hover:scale-125 hover:rotate-12">
                <FaInstagram />
              </li>
              <li className="text-lg text-emerald-100 opacity-95 hover:scale-125 hover:rotate-12">
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 px-4 py-6">
          <h3 className="font-semibold text-lg text-emerald-100">Pages</h3>
          <hr className="w-14 border-emerald-100 border-1" />
          <ul className="flex flex-col gap-4 pt-4 text-sm pl-2 text-emerald-100 ">
            <Link to="/">
              <li className="uppercase hover:underline">Home</li>
            </Link>
            <Link to="/about">
              <li className="uppercase hover:underline">About</li>
            </Link>
            <Link to="/search">
              <li className="uppercase hover:underline">Properties</li>
            </Link>
          </ul>
        </div>
        <div className="flex-1 px-4 py-6">
          <h3 className="font-semibold text-lg text-emerald-100">
            Usfel Links
          </h3>
          <hr className="w-28 border-emerald-100 border-1" />
          <ul className="flex flex-col gap-4 pt-4 text-sm pl-2 text-emerald-100 ">
            <Link to="/contact-us">
              <li className="uppercase hover:underline">Contact</li>
            </Link>
            <Link to="/privacy-police">
              <li className="uppercase hover:underline">Privacy Police</li>
            </Link>
            <Link to="/terms">
              <li className="uppercase hover:underline">Terms & Conditions</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className=" bg-emerald-900 text-emerald-100 py-2 border-solid border-emerald-100 border-t-2 border-opacity-10">
        <p className="text-sm text-center font-normal font-weight-[100]">
          Copyright © 2023 All Rights Reserved. Developed by{' '}
          <Link
            to="hanadyhusino.com"
            className="underline"
          >
            Eng. Hanady Husino
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
