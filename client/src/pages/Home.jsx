import { useEffect, useState } from "react";
import { getDistricts } from "../services/api";
import DistrictCard from "../components/DistrictCard";
import Pagination from "../components/Pagination";

function Home() {
  const [districts, setDistricts] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [pages, setPages] = useState(1);
  const [province, setProvince] = useState("");

  const loadDistricts = async (searchKeyword = "", pageNumber = 1, selectedProvince = "") => {
    try {
      const data = await getDistricts(searchKeyword, pageNumber, selectedProvince);

      setDistricts(data.districts);
      setPage(data.page);
      setPages(data.pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDistricts(keyword, page, province);
  }, [keyword, page, province]);

  return (
    <div>


      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPage(1); // reset page
          loadDistricts(keyword, 1, province);
        }}
        className="flex justify-center mb-6"
      >
        <input
          type="text"
          placeholder="Search districts..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border p-2 w-1/2 rounded-l"
        />

        <button type="submit" className="bg-blue-600 text-white px-4 rounded-r">
          Search
        </button>
      </form>

     
      <div className="flex justify-center mt-4">
        <select
          value={province}
          onChange={(e) => {
            setProvince(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded"
        >
          <option value="">Filter by Province</option>

          
          <option value="Western Province">Western Province</option>
          <option value="North Central Province">North Central Province</option>
          <option value="South Province">South Province</option>
          <option value="Central Province">Central Province</option>
          <option value="Eastern Province">Eastern Province</option>
          <option value="North Western Province">North Western Province</option>
          <option value="North Province">North Province</option>
          <option value="Uva Province">Uva Province</option>
          <option value="Sabaragamuva Province">Sabaragamuva Province</option>
        </select>
      </div>

      <h1 className="text-blue-500">Welcome to Sri Lanka</h1>

      {/* DISTRICTS */}
      {districts.map((district) => (
        <DistrictCard key={district._id} district={district} />
      ))}

      {/* PAGINATION */}
      <Pagination
        page={page}
        pages={pages}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}

export default Home;