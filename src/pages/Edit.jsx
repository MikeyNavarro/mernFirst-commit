import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  // Get Path variable
  const { record_id } = useParams();

  // State
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [vintage, setVintage] = useState(false);

  const navigate = useNavigate();

  // Handler functions

  const nameChangeHandler = (e) => setName(e.target.value);
  const priceChangeHandler = (e) => setPrice(e.target.value);
  const vintageChangeHandler = (e) => setVintage(e.target.checked);

  const updateRecordForm = (e) => {
    e.preventDefault();

    let body = {
      name: name,
      vintage: vintage,
      price: price,
    };

    axios
      .post("http://localhost:8000/api/records", body)

      .then((res) => {
        console.log(res.data);
        setName("");
        setVintage(false);
        setPrice(0);
        navigate("/records");
      })
      .catch((errors) => console.log(errors));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/records/${record_id}`)
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
        setVintage(res.data.vintage);
      })
      .catch((errors) => console.log(errors));
  }, []);

  return (
    <div>
      <div className="card mt-5">
        <h1 className="card-header text-center">Edit A Record</h1>
        <div className="card-body">
          <form onSubmit={updateRecordForm}>
            <div className="mb-3">
              <label className="form-label">Record Name:</label>
              <input
                onChange={nameChangeHandler}
                value={name}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="form-check-label">Vintage:</label>
              <input
                onClick={vintageChangeHandler}
                checked={vintage}
                className="form-check-input"
                type="checkbox"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price:</label>
              <input
                onChange={priceChangeHandler}
                value={price}
                className="form-control"
                type="number"
              />
            </div>
            <button className="mt-3">Create Record</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
