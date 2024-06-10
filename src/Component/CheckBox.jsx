
const CheckBox = ({text, ...rest}) => {
  return (
    <div>
        <input type="checkbox" {...rest} /> 
        <span>{text}</span>
    </div>
  )
}

export default CheckBox