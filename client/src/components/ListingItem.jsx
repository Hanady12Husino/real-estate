import { Link } from 'react-router-dom';
import { FaBath, FaBed, FaMapMarkerAlt } from 'react-icons/fa';
const ListingItem = ({ listing }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[260px]  ">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[240px] sm:h-[200px] w-full object-cover hover:scale-105 transition-scale duration-200"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg text-emerald-900 font-semibold">
            {listing.name}
          </p>
          <div className="flex flex-row items-center gap-1">
            <FaMapMarkerAlt className="h-4 w-4 text-emerald-500" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-emerald-500 mt-2 font-semibold">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && '/month'}
          </p>
          <div className="flex gap-4">
            <div className=" flex gap-1 items-center font-bold text-xs text-emerald-900">
              <FaBed className="text-[16px] " />
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}
            </div>
            <div className="flex gap-1 items-center font-bold text-xs text-emerald-900">
              <FaBath className="text-[16px]" />
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths`
                : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
