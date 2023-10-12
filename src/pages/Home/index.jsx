import { Link } from "react-router-dom";
import axios from "axios"
import "./index.scss";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [refetchIndicator, setRefetchIndicator ] = useState(false)

  useEffect(() => {
    setIsLoading(true);

    // Fetch data from the API
    fetch("http://localhost:3000/api/v2/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data, "dataaaaaaaaa");
        setData(data);
        setResults(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [refetchIndicator]);

  

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v2/product/${itemId}`);
      setData((prevItems) => prevItems.filter((item) => item._id !== itemId));
      console.log('Item deleted successfully');
      setRefetchIndicator(prevValue =>! prevValue) 
    } catch (error) {
      console.error(error);
    }
  };

  const filter = (e) => {
    setResults(data.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tamah Produk
      </Link>
      <div className="search">
        <input type="text" onChange={filter} placeholder="Masukan kata kunci..." />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            <tr >
              <td colSpan="4">Loading...</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {results.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td className="text-right">{item.price}</td>
                <td className="text-center">
                  <Link to={`/detail/${item._id}`} className="btn btn-sm btn-info">
                    Detail
                  </Link>
                  <Link to={`/edit/${item._id}`} className="btn btn-sm btn-warning">
                    Edit
                  </Link>
                  <Link
                    to="/"
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Home;
