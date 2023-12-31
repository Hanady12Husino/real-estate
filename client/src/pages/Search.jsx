import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ListingItem from '../components/ListingItem';
import AnimationWrapper from '../components/AnimationWrapper';

const Search = () => {
  const navigate = useNavigate();
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    type: 'all',
    parking: false,
    furnished: false,
    offer: false,
    sort: 'created_at',
    order: 'desc',
  });
  const [loadingListings, setLoadingListings] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const typeFromUrl = urlParams.get('type');
    const parkingFromUrl = urlParams.get('parking');
    const furnishedFromUrl = urlParams.get('furnished');
    const offerFromUrl = urlParams.get('offer');
    const sortFromUrl = urlParams.get('sort');
    const orderFromUrl = urlParams.get('order');

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setSidebarData({
        searchTerm: searchTermFromUrl || '',
        type: typeFromUrl || 'all',
        parking: parkingFromUrl === 'true' ? true : false,
        furnished: furnishedFromUrl === 'true' ? true : false,
        offer: offerFromUrl === 'true' ? true : false,
        sort: sortFromUrl || 'created_at',
        order: orderFromUrl || 'desc',
      });
    }

    const fetchListings = async () => {
      setLoadingListings(true);
      setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      if (data.length > 8) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
      setListings(data);
      setLoadingListings(false);
    };
    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === 'all' ||
      e.target.id === 'rent' ||
      e.target.id === 'sale'
    ) {
      setSidebarData({ ...sidebarData, type: e.target.id });
    }

    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }

    if (
      e.target.id === 'parking' ||
      e.target.id === 'furnished' ||
      e.target.id === 'offer'
    ) {
      setSidebarData({
        ...sidebarData,
        [e.target.id]:
          e.target.checked || e.target.checked === 'true' ? true : false,
      });
    }

    if (e.target.id === 'sort_order') {
      const sort = e.target.value.split('_')[0] || 'created_at';

      const order = e.target.value.split('_')[1] || 'desc';

      setSidebarData({ ...sidebarData, sort, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('type', sidebarData.type);
    urlParams.set('parking', sidebarData.parking);
    urlParams.set('furnished', sidebarData.furnished);
    urlParams.set('offer', sidebarData.offer);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('order', sidebarData.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const startIndex = numberOfListings;
    const urlParams = new URLSearchParams(location.listing);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/listing/get?${searchQuery}`);
    const data = await res.json();
    if (data.length < 9) {
      setShowMore(false);
    }
    setListings([...listings, ...data]);
  };
  return (
    <AnimationWrapper>
      <div className="flex flex-col md:flex-row">
        <div className="p-7 border-b-2 sm:border-r-2 md:min-h-screen">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-2">
              <label className="whitespace-nowrap font-semibold text-emerald-900">
                Search Term:
              </label>
              <input
                type="text"
                id="searchTerm"
                placeholder="Search..."
                className="border border-emerald-200 rounded-lg p-3 w-full placeholder:text-emerald-200"
                value={sidebarData.searchTerm}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-2 items-center flex-wrap">
              <label className="font-semibold text-emerald-900">Type:</label>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="all"
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebarData.type === 'all'}
                />
                <span className="text-emerald-500">Rent & Sale</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="rent"
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebarData.type === 'rent'}
                />
                <span className="text-emerald-500">Rent</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="sale"
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebarData.type === 'sale'}
                />
                <span className="text-emerald-500">Sale</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="offer"
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebarData.offer}
                />
                <span className="text-emerald-500">Offer</span>
              </div>
            </div>
            <div className="flex gap-2 items-center flex-wrap">
              <label className="font-semibold text-emerald-900">
                Amenities:
              </label>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="parking"
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebarData.parking}
                />
                <span className="text-emerald-500">Parking</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="furnished"
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebarData.furnished}
                />
                <span className="text-emerald-500">Furnished</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <label className="font-semibold text-emerald-900">Sort:</label>
              <select
                id="sort_order"
                className="border rounded-lg p-3 text-emerald-500"
                onChange={handleChange}
                defaultValue={'created_at_desc'}
              >
                <option
                  value={'regularPrice_desc'}
                  className="text-emerald-500"
                >
                  Price high to low
                </option>
                <option
                  value={'regularPrice_asc'}
                  className="text-emerald-500"
                >
                  Price low to high
                </option>
                <option
                  value={'createdAt_desc'}
                  className="text-emerald-500"
                >
                  Latest
                </option>
                <option
                  value={'createdAt_asc'}
                  className="text-emerald-500"
                >
                  Oldest
                </option>
              </select>
            </div>
            <button className="bg-emerald-900 text-white uppercase p-3 rounded-lg hover:opacity-95">
              Search
            </button>
          </form>
        </div>
        <div className="flex-1 p-3 sm:p-7">
          <h1 className="text-emerald-900 font-semibold text-3xl boerder-b mt-2">
            Property results:
          </h1>
          <div className="p-3 sm:p-7 flex flex-wrap gap-4">
            {!loadingListings && listings.length === 0 && (
              <p className="text-xl text-emerald-900">No listing found!</p>
            )}
            {loadingListings && (
              <p className="text-xl text-emerald-900 text-center w-full">
                Loading...
              </p>
            )}

            {!loadingListings &&
              listings &&
              listings.map((listing) => (
                <ListingItem
                  key={listing._id}
                  listing={listing}
                />
              ))}
          </div>
          <div className="text-center">
            {showMore && (
              <button
                onClick={() => {
                  onShowMoreClick();
                }}
                className="bg-emerald-900 text-white rounded-lg p-3 mt-4 hover:opacity-95 text-center"
              >
                Show more
              </button>
            )}
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Search;
