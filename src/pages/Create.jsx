import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setprice] = useState(0);
  const [vintage, setVintage] = useState(false);
  const navigate = useNavigate();

  const nameChangeHandler = (e) => setName(e.target.value);
  const priceChangeHandler = (e) => setprice(e.target.value);
  const vintageChangeHandler = (e) => setVintage(e.target.checked);

  const createRecordForm = (e) => {
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
        setprice(0);
        navigate("/records");
      })
      .catch((errors) => console.log(errors));
  };

  return (
    <div>
      <div className="card mt-5">
        <h1 className="card-header text-center">Create A Record</h1>
        <div className="card-body">
          <form onSubmit={createRecordForm}>
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
                onChange={vintageChangeHandler}
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

export default Create;
