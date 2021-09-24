const CheckBox = ({name, label, checked}) => {
  return (
    <div>
      <input type="checkbox" id={name} defaultChecked={checked}/>
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default CheckBox;