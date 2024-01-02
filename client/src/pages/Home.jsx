import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import { FaArrowRight } from 'react-icons/fa';
import BackgroundImage from '../images/background.png';
import AnimationWrapper from '../components/AnimationWrapper';

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <AnimationWrapper>
      <div className="bg-gradient-to-b from-emerald-50 to-emerald-100 w-full  h-[80vh] relative">
        <img
          src={BackgroundImage}
          className="w-full h-full object-cover absolute mix-blend-overlay opacity-90"
        />
        <div
          style={{ zIndex: 1 }}
          className=" flex  absolute items-center justify-center h-full w-full md:text-center "
        >
          <div className="flex  flex-col gap-6 py-28 px-10 max-w-6xl mx-auto md:items-center">
            <div>
              <h1 className="text-emerald-500 font-bold text-3xl lg:text-6xl leading-relaxed	">
                Find your next{' '}
                <span className="gradient-text">
                  ideal <br /> property with ease
                </span>
              </h1>
            </div>
            <div className="text-sm sm:text-lg text-emerald-700 w-[250px] sm:w-[490px]">
              Home Real Estate Agency is the best place to find your perfect
              place to live.
            </div>

            <Link
              className="text-md text-emerald-500 hover:underline flex items-center gap-1 whitespace-nowrap"
              to={'/search'}
            >
              Search now <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="mt-4 sm:mt-10">
            <div className="my-3 mb-6  sm:text-center flex flex-col sm:items-center">
              <h2 className="text-2xl sm:text-4xl font-semibold  gradient-text">
                Recent offers
              </h2>

              <Link
                className="text-md text-emerald-500 hover:underline flex items-center gap-1 whitespace-nowrap"
                to={'/search?offer=true'}
              >
                See more offers <FaArrowRight />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {offerListings.map((listing) => (
                <ListingItem
                  listing={listing}
                  key={listing._id}
                />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="mt-4 sm:mt-10">
            <div className=" my-3 mb-6 sm:text-center flex flex-col sm:items-center">
              <h2 className="text-2xl sm:text-4xl font-semibold gradient-text">
                Top Recent places for rent
              </h2>
              <Link
                className="text-md text-emerald-500 hover:underline flex items-center gap-1 whitespace-nowrap"
                to={'/search?type=rent'}
              >
                See more places for rent <FaArrowRight />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {rentListings.map((listing) => (
                <ListingItem
                  listing={listing}
                  key={listing._id}
                />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="mt-4 sm:mt-10">
            <div className="my-3 mb-6 sm:text-center flex flex-col sm:items-center">
              <h2 className="text-2xl sm:text-4xl font-semibold gradient-text">
                Top Recent places for sale
              </h2>
              <Link
                className="text-md text-emerald-500 hover:underline flex items-center gap-1 whitespace-nowrap"
                to={'/search?type=sale'}
              >
                See more places for sale <FaArrowRight />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {saleListings.map((listing) => (
                <ListingItem
                  listing={listing}
                  key={listing._id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </AnimationWrapper>
  );
};

export default Home;
