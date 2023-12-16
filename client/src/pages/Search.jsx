const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 sm:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold text-emerald-900">
              Search Term:
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border border-emerald-200 rounded-lg p-3 w-full placeholder:text-emerald-200"
            />
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <label className="font-semibold text-emerald-900">Type:</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="all"
                className="w-5"
              />
              <span className="text-emerald-500">Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rent"
                className="w-5"
              />
              <span className="text-emerald-500">Rent</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="sale"
                className="w-5"
              />
              <span className="text-emerald-500">Sale</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="offer"
                className="w-5"
              />
              <span className="text-emerald-500">Offer</span>
            </div>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <label className="font-semibold text-emerald-900">Amenities:</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
              />
              <span className="text-emerald-500">Parking</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
              />
              <span className="text-emerald-500">Furnished</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <label className="font-semibold text-emerald-900">Sort:</label>
            <select
              id="sort_order"
              className="border rounded-lg p-3 text-emerald-500"
            >
              <option className="text-emerald-500">Price high to low</option>
              <option className="text-emerald-500">Price low to high</option>
              <option className="text-emerald-500">Latest</option>
              <option className="text-emerald-500">Oldest</option>
            </select>
          </div>
          <button className="bg-emerald-900 text-white uppercase p-3 rounded-lg hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      <div className="p-7">
        <h1 className="text-emerald-900 font-semibold text-3xl boerder-b mt-2">
          Property results:
        </h1>
      </div>
    </div>
  );
};

export default Search;
