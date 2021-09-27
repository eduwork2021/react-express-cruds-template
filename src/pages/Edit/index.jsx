import Input from "../../components/Input";

const Edit = () => {
  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value="test"/>
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value="20000000"/>
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock" value="10"/>
          <Input name="status" type="checkbox" label="Active" checked/>
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Edit;