import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tamah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..."/>
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
        <tbody>
          <tr>
            <td>1</td>
            <td>Laptop</td>
            <td className="text-right">RP. 20.000.000</td>
            <td className="text-center">
              <Link to="/detail" className="btn btn-sm btn-info">Detail</Link>
              <Link to="/edit" className="btn btn-sm btn-warning">Edit</Link>
              <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Monitor</td>
            <td className="text-right">RP. 10.000.000</td>
            <td className="text-center">
              <Link to="/detail" className="btn btn-sm btn-info">Detail</Link>
              <Link to="/edit" className="btn btn-sm btn-warning">Edit</Link>
              <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home;