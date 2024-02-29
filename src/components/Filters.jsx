function Filters() {
  return (
    <form className="flex rounded bg-gray-200 justify-between p-2 mt-2 mb-2 gap-3 text-sm align-left">
      {/* Location */}
      <select className="border w-full p-2 rounded">
        <option selected>Any Location</option>
        <option>Thailand</option>
        <option>Italy</option>
        <option>Ireland</option>
        <option>Morocco</option>
      </select>
      {/* Rooms */}
      <select className="border w-full p-2 rounded">
        <option selected>Any Rooms</option>
        <option>1 room</option>
        <option>2 rooms</option>
        <option>3 rooms</option>
        <option>4 rooms</option>
        <option>5 rooms</option>
      </select>
      {/* Max Price */}
      <input
        type="number"
        placeholder="max price"
        className="border w-full p-2 rounded"
      />
      {/* Sort By */}
      <select className="border w-full p-2 rounded">
        <option selected>sort by</option>
        <option>Price High to Low</option>
        <option>Price Low to High</option>
        <option>Number of Rooms</option>
      </select>
      {/* Keywords Search */}
      <input
        type="text"
        placeholder="keywords..."
        className="border rounded w-full p-2"
      />
      {/* Search Button */}
      <button className="border rounded px-2 bg-red-400 text-white">
        Search
      </button>
    </form>
  )
}

export default Filters
