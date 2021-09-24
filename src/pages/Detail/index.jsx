import { Link } from "react-router-dom";
import './index.scss';

const Detail = () => {
  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: asdasdasdasd</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: Laptop</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: Rp. 20.000.000</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: 10</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;