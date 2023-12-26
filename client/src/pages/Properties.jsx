import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaPen, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import SideBar from '../components/SideBar';

const Properties = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    const fetchUserListings = async () => {
      try {
        setShowListingsError(false);
        const res = await fetch(`/api/user/listings/${currentUser._id}`);
        const data = await res.json();

        if (data.success === false) {
          setShowListingsError(true);
          return;
        }
        setUserListings(data);
        //if (userListings.length = 0)
      } catch (error) {
        setShowListingsError(true);
      }
    };
    fetchUserListings();
  }, []);

  const handleDeleteListing = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex ">
      <SideBar />
      <div className="flex-1 p-3 sm:p-7">
        <h1 className="text-emerald-900 font-semibold text-xl lg:text-3xl boerder-b mt-2">
          My Properties:
        </h1>
        <p className="text-red-700 t-5">
          {showListingsError ? 'Error Show Properties' : ''}
        </p>
        <div className="py-6 px-3">
          {userListings.length === 0 && (
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-20 items-center">
              <p className="text-xl text-emerald-900">
                Dont have any properties yet!
              </p>
              <Link to={'/create-listing'}>
                <button className="bg-emerald-500 text-emerald-100 duration-500 px-6 py-2 hover:bg-emerald-900 rounded-full ">
                  Add Property
                </button>
              </Link>
            </div>
          )}

          {userListings && userListings.length > 0 && (
            <div className="flex flex-col gap-4">
              {userListings.map((listing) => (
                <div
                  key={listing._id}
                  className="border rounded-lg p-3 flex lg:w-2/3 justify-between items-center "
                >
                  <div className="flex flex-col sm:flex-row gap-4 md:items-center">
                    <Link to={`/listing/${listing._id}`}>
                      <img
                        src={listing.imageUrls[0]}
                        alt="listing cover"
                        className="h-18 w-20 sm:h-20 sm:w-20 object-cover rounded-lg"
                      />
                    </Link>
                    <Link
                      className="text-emerald-900 font-semibold text-[14px] md:text-[16px] hover:underline  flex-1"
                      to={`/listing/${listing._id}`}
                    >
                      <p>{listing.name}</p>
                    </Link>
                  </div>

                  <div className="flex flex-col item-center">
                    <button
                      type="button"
                      onClick={() => handleDeleteListing(listing._id)}
                      className="p-3 text-red-700 rounded-lg uppercase flex items-center hover:opacity-75 "
                    >
                      <FaTrash className="mr-1 text-xs" />
                      <span>Delete</span>
                    </button>
                    <Link to={`/update-listing/${listing._id}`}>
                      <button className="p-3 text-green-700 rounded-lg uppercase flex items-center hover:opacity-75">
                        <FaPen className="mr-1 text-xs" />
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
