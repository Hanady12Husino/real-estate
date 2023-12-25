import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="">
      <div className=" bg-emerald-900 text-emerald-100 py-2 border-solid border-emerald-100 border-t-2 border-opacity-10">
        <div className="container flex flex-col md:flex-row mx-auto items-center justify-between px-3 gap-3">
          <p className="text-[13px] text-center sm:text-left font-normal font-weight-[100]">
            Copyright © 2023 All Rights Reserved. Developed by{' '}
            <Link
              to="hanadyhusino.com"
              className="underline"
            >
              Eng. Hanady Husino
            </Link>
          </p>
          <div className="flex items-center ">
            <ul className="flex gap-2 sm:gap-4   font-normal font-weight-[100] text-emerald-100 ">
              <Link to="/contact-us">
                <li className="text-[13px] hover:underline">Contact</li>
              </Link>
              <Link to="/privacy-police">
                <li className=" text-[13px] hover:underline">Privacy Police</li>
              </Link>
              <Link to="/terms">
                <li className=" text-[13px] hover:underline">
                  Terms & Conditions
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
