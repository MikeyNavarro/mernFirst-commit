import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllRecords = () => {
  const [allRecords, setAllRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/records")
      .then((res) => setAllRecords(res.data))
      .catch((errors) => console.log(errors));
  });

  return (
    <div className="container mt-5">
      <div className="card bg-dark text-white">
        <h1 className="card-header text-center ">All Records</h1>

        <table className="table text-white mt-5 text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Record Name:</th>
              <th>Price:</th>
              <th>Vintage:</th>
              <th>Created At:</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allRecords.map((record) => {
              const { _id, name, price, vintage, createdAt } = record;
              return (
                <tr>
                  <td>{_id}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  {vintage ? <td>True</td> : <td>False</td>}
                  <td>{createdAt}</td>
                  <td>
                    <Link to={`/record/view/${_id}`}>
                      <button>View</button>
                    </Link>
                    <Link to={`/record/edit/${_id}`}>
                      <button>Edit</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRecords;
