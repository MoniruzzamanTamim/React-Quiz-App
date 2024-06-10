
import style from '../Style/Textinput.module.css';

const InputText = ({icon, ...rest}) => {
  return (
    <div className={style.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined">{icon}</span>
    </div>
  )
}

export default InputText