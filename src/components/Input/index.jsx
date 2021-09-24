const Input = ({label, placeholder, name, value, type}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} className="form-control" id={name} placeholder={placeholder} defaultValue={value}/>
    </div>
  )
}

export default Input;