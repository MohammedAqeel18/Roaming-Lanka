import { useEffect, useState } from "react";
import { getDistricts } from "../services/api";
import DistrictCard from "../components/DistrictCard";
import Pagination from "../components/Pagination";
import HeroSection from "../components/HeroSection";

function Home() {
  const [districts, setDistricts] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [pages, setPages] = useState(1);
  const [province, setProvince] = useState("");

  const loadDistricts = async (
    searchKeyword = "",
    pageNumber = 1,
    selectedProvince = ""
  ) => {
    try {
      const data = await getDistricts(
        searchKeyword,
        pageNumber,
        selectedProvince
      );

      setDistricts(data.districts);
      setPage(data.page);
      setPages(data.pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDistricts(keyword, page, province);
  }, [page, province]);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <HeroSection />

      {/* SEARCH SECTION */}
      <div className="max-w-6xl mx-auto px-4 -mt-14 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6">

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Explore Sri Lanka
          </h2>

          <div className="flex flex-col md:flex-row gap-4">

            {/* Search Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPage(1);
                loadDistricts(keyword, 1, province);
              }}
              className="flex flex-1"
            >
              <input
                type="text"
                placeholder="Search districts..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="flex-1 border border-gray-300 p-3 rounded-l-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 px-6 text-white rounded-r-lg hover:bg-blue-700 transition"
              >
                Search
              </button>
            </form>

            {/* Province Filter */}
            <select
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
                setPage(1);
              }}
              className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Provinces</option>
              <option value="Western Province">Western Province</option>
              <option value="Central Province">Central Province</option>
              <option value="Southern Province">Southern Province</option>
              <option value="Eastern Province">Eastern Province</option>
              <option value="North Central Province">North Central Province</option>
              <option value="North Western Province">North Western Province</option>
              <option value="Northern Province">Northern Province</option>
              <option value="Uva Province">Uva Province</option>
              <option value="Sabaragamuva Province">Sabaragamuva Province</option>
            </select>

          </div>
        </div>
      </div>

      {/* FEATURED DESTINATIONS */}
      <div className="max-w-6xl mx-auto px-4 mt-20">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Featured Destinations
          </h2>

          <p className="text-gray-500 text-lg">
            Discover hidden gems and unforgettable experiences across Sri Lanka
          </p>

        </div>

        {/* DISTRICT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {districts.map((district) => (
            <DistrictCard
              key={district._id}
              district={district}
            />
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-14 mb-20">
          <Pagination
            page={page}
            pages={pages}
            onPageChange={(p) => setPage(p)}
          />
        </div>

      </div>

    </div>
  );
}

export default Home;