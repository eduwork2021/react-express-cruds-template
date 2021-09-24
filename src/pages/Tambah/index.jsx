import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';
import './index.scss';

const Tambah = () => {
  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama"/>
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga"/>
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock"/>
          <CheckBox name="status" label="Active"/>
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;