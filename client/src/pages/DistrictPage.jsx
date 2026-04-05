import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function DistrictPage() {
  const { id } = useParams();

  const [district, setDistrict] = useState(null);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  // ✅ Fetch District
  const fetchDistrict = async () => {
    try {
      const { data } = await API.get(`/districts/${id}`);
      setDistrict(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDistrict();
  }, [id]);

  // ✅ Submit Review
  const submitReviewHandler = async (e) => {
    e.preventDefault();

    if (!rating || !comment) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post(`/districts/${id}/reviews`, {
        rating,
        comment,
      });

      alert("Review added");

      setRating("");
      setComment("");

      await fetchDistrict(); // 🔥 refresh UI
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Error");
    }
  };

  if (!district) return <h3>Loading...</h3>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={district.image}
        alt={district.name}
        className="w-full h-96 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">{district.name}</h1>
      <p className="text-gray-500">{district.province}</p>
      <p className="mt-4">{district.description}</p>

      {/* ⭐ Rating */}
      <p className="mt-4 text-yellow-500 font-bold">
        ⭐ {district.rating}
      </p>

      {/* 📝 Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>

        {district.reviews.length === 0 && <p>No reviews yet</p>}

        {district.reviews.map((review, index) => (
          <div key={index} className="border p-4 rounded mb-3">
            <h4 className="font-semibold">{review.name}</h4>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* ✍️ Write Review */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Write a review</h2>

        {userInfo ? (
          <form onSubmit={submitReviewHandler} className="space-y-4">
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border p-2 w-full"
            >
              <option value="">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border p-2 w-full"
              placeholder="Write your review..."
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit Review
            </button>
          </form>
        ) : (
          <p>Please login to write a review</p>
        )}
      </div>
    </div>
  );
}

export default DistrictPage;