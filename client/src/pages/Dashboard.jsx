import { useSelector } from 'react-redux';
import SideBar from '../components/SideBar.jsx';
import { useEffect, useState } from 'react';
import { FaHome, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=all');
        const data = await res.json();
        setListings(data);
        fetchOfferListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale');
        const data = await res.json();
        setSaleListings(data);
        fetchUsers();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/user/get/:id');
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListings();
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-3 sm:p-7">
        <h1 className="text-emerald-900 font-semibold text-xl lg:text-3xl boerder-b mt-2">
          Dashboard
        </h1>
        <h2 className="text-[14px] text-emerald-500 py-3">
          Welcome Back {currentUser.fullname}
        </h2>
        <div className="flex mt-[20px] gap-4 flex-col lg:flex-row">
          <div className="flex flex-col rounded-lg bg-emerald-900 py-[50px]  items-center gap-3 w-full lg:w-1/2">
            <FaHome className="text-emerald-100 text-3xl" />
            <h3 className="text-sm text-emerald-50 w-200">All Properties</h3>
            <h3 className="text-2xl text-emerald-500 font-bold ">
              {listings.length}
            </h3>
          </div>
          <div className="flex flex-col rounded-lg bg-emerald-900 py-[50px]  items-center gap-3 w-full lg:w-1/2">
            <FaUsers className="text-emerald-100 text-3xl" />
            <h3 className="text-sm text-emerald-50 w-200">All Agents</h3>
            <h3 className="text-2xl text-emerald-500 font-bold ">
              {users.length}
            </h3>
          </div>
        </div>
        <div className="mt-[20px] flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col rounded-lg bg-gradient-to-r from-emerald-200 to-emerald-50  items-center gap-4 w-full lg:w-1/3 py-[50px]">
            <h3 className="text-sm text-emerald-900 ">Properties For Sales</h3>
            <h3 className="text-xl text-emerald-500 font-bold ">
              {saleListings.length}
            </h3>
          </div>
          <div className="flex flex-col rounded-lg bg-gradient-to-r from-emerald-200 to-emerald-50  items-center gap-4 w-full lg:w-1/3 py-[50px]">
            <h3 className="text-sm text-emerald-900 ">Properties For Rent</h3>
            <h3 className="text-xl text-emerald-500 font-bold">
              {rentListings.length}
            </h3>
          </div>
          <div className=" flex flex-col rounded-lg bg-gradient-to-r from-emerald-200 to-emerald-50  items-center gap-4 w-full lg:w-1/3 py-[50px]">
            <h3 className="text-sm w-200 text-emerald-900">
              Properties With Offers
            </h3>
            <h3 className="text-xl text-emerald-500 font-bold">
              {offerListings.length}
            </h3>
          </div>
        </div>
        <div className="flex mt-[20px] gap-4 flex-col lg:flex-row">
          <div className="flex  gap-4 flex-col  border rounded-lg p-3 w-full lg:w-1/3">
            <h2 className="text-center text-3xl text-emerald-900 font-bold">
              Top Agents
            </h2>
            {users && users.length > 0 && (
              <div className="flex flex-col gap-4">
                {users
                  .map((user) => (
                    <div
                      key={user._id}
                      className=" flex justify-between items-center "
                    >
                      <div className="flex gap-4 items-center">
                        <Link to={`/profile/${currentUser._id}`}>
                          <img
                            src={user.avatar}
                            alt="listing cover"
                            className="h-10 w-10 object-cover rounded-full"
                          />
                        </Link>

                        <Link
                          className=" hover:underline  flex-1"
                          to={`/profile/${currentUser._id}`}
                        >
                          <p className="text-emerald-900 font-semibold text-[14px] md:text-[16px]">
                            {user.fullname}
                          </p>
                          <p className="text-emerald-500  text-[14px] md:text-[12px]">
                            {user.email}
                          </p>
                        </Link>
                      </div>
                    </div>
                  ))
                  .slice(24, 28)}
              </div>
            )}
          </div>
          <div className="flex  gap-4 flex-col  border rounded-lg p-3 w-full lg:w-2/3">
            <h2 className="text-center text-3xl text-emerald-900 font-bold">
              Latest Properties
            </h2>

            {listings && listings.length > 0 && (
              <div className="flex flex-col gap-4">
                {listings
                  .map((listing) => (
                    <div
                      key={listing._id}
                      className=" flex justify-between items-center "
                    >
                      <div className="flex gap-4 items-center">
                        <Link to={`/listing/${listing._id}`}>
                          <img
                            src={listing.imageUrls[0]}
                            alt="listing cover"
                            className="h-10 w-10 object-cover rounded-full"
                          />
                        </Link>

                        <Link
                          className=" hover:underline  flex-1"
                          to={`/listing/${listing._id}`}
                        >
                          <p className="text-emerald-900 font-semibold text-[14px] md:text-[16px]">
                            {listing.name}
                          </p>
                        </Link>
                      </div>
                    </div>
                  ))
                  .slice(-4)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
