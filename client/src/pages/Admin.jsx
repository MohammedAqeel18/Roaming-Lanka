import { useState, useEffect } from "react";
import {
  getDistricts,
  deleteDistrict,
  createDistrict,
  updateDistrict,
} from "../services/api";

function Admin() {
  const [districts, setDistricts] = useState([]);

  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadDistricts();
  }, []);

  const loadDistricts = async () => {
    const data = await getDistricts();
    setDistricts(data.districts);
  };

  // DELETE
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteDistrict(id);
      loadDistricts();
    }
  };

  // CREATE
  const handleCreate = async () => {
    try {
      await createDistrict({
        name,
        province,
        description,
        image,
      });

      loadDistricts();
      resetForm();

    } catch (error) {
      console.error(error);
    }
  };

  // EDIT (FILL FORM)
  const handleEdit = (district) => {
    setEditingId(district._id);

    setName(district.name);
    setProvince(district.province);
    setDescription(district.description);
    setImage(district.image);
  };

  // UPDATE
  const handleUpdate = async () => {
    try {
      await updateDistrict(editingId, {
        name,
        province,
        description,
        image,
      });

      loadDistricts();
      resetForm();

    } catch (error) {
      console.error(error);
    }
  };

  // RESET FORM
  const resetForm = () => {
    setEditingId(null);
    setName("");
    setProvince("");
    setDescription("");
    setImage("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>

      {/* FORM */}
      <div className="border p-4 mt-4">
        <h2 className="text-xl font-bold mb-2">
          {editingId ? "Edit District" : "Add New District"}
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          placeholder="Province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <button
          onClick={editingId ? handleUpdate : handleCreate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update District" : "Create District"}
        </button>

        {editingId && (
          <button
            onClick={resetForm}
            className="ml-2 bg-gray-500 text-white px-4 py-2"
          >
            Cancel
          </button>
        )}
      </div>

      {/* LIST */}
      {districts.map((district) => (
        <div key={district._id} className="border p-4 my-4 rounded">
          <h2 className="text-xl font-bold">{district.name}</h2>
          <p className="text-gray-600">{district.province}</p>

          <button
            onClick={() => handleEdit(district)}
            className="bg-yellow-500 text-white px-2 py-1"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(district._id)}
            className="bg-red-500 text-white px-2 py-1 ml-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;