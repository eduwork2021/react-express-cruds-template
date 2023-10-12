import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

const Edit = () => {
  const { itemId } = useParams();
  const history = useHistory();
  const [item, setItem] = useState({
    name: '',
    price: '',
    stock: '',
  });
  useEffect(() => {
    axios.get(`http://localhost:3000/api/v2/product/${itemId}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error('Error fetching item for editing:', error);
      });
  }, [itemId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };
  const handleSave = (e) => {
    e.preventDefault()
    // Send a PUT request to update the item
    axios.put(`http://localhost:3000/api/v2/product/${itemId}`, item)
      .then(() => {
        // Redirect to the item detail page after successful update
        history.push(`/`);
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  }

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form >
          <Input
            name="name"
            type="text"
            placeholder="Nama Produk..."
            label="Nama"
            value={item.name || ""}
            onChange={handleInputChange}
          />
          <Input
            name="price"
            type="number"
            placeholder="Harga Produk..."
            label="Harga"
            value={item.price || ""}
            onChange={handleInputChange}
          />
          <Input
            name="stock"
            type="number"
            placeholder="Harga Produk..."
            label="Stock"
            value={item.stock || ""}
            onChange={handleInputChange}
          />
          <Input name="status" type="checkbox" label="Active" defaultChecked />
          <button type="submit" onClick={handleSave} className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
