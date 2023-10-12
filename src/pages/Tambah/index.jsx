
import { useState } from 'react';
import Input from '../../components/Input';
import './index.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Tambah = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [status, setStatus] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [loading, setLoading] = useState(false);

  //redirect
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name);
    formData.append('price', parseFloat(price));
    formData.append('stock', stock);
    formData.append('status', status);

    if (productImage) {
      formData.append('image', productImage);
    }

    try {
      const response = await fetch('http://localhost:3000/api/v2/product/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Product added successfully
        setName('');
        setPrice('');
        setStock('');
        setStatus(true);
        setProductImage(null);
      } else {
        // Handle errors
        console.error('Failed to add product');
      }
      setLoading()
      history.push('/')
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  }

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={ handleSubmit }>
          <Input name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nama Produk..." label="Nama"/>
          <Input name="price" value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Harga Produk..." label="Harga"/>
          <Input name="Stock" value={stock} onChange={(e) => setStock(e.target.value)} type="number" placeholder="Stock Produk..." label="Stock"/>
          <Input name="Image" onChange={handleImageChange} type="file" placeholder="Image Produk..." label="Image"/>
          <Input name="status" value={status} onChange={(e) => setStatus(e.target.value)} type="checkbox" label="Active" defaultChecked/>
          <button type="submit" className="btn btn-primary">{loading ? 'Loading':'Simpan'}</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;