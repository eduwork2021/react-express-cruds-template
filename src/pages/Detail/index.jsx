import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import './index.scss';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Detail = () => {
  const {id} = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3000/api/v2/product/${id}`); 
        setData(response.data);
        console.info(response, '<==========view details========');
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [id]);
  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {data._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {data.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: Rp. {data.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {data.stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;