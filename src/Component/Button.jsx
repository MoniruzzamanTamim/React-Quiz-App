import style from '../Style/Button.module.css';

const Button = ({children, ...rest}) => {
  return (
   <div className={style.button}>
    <span>{children}</span>
   </div>
  )
}

export default Button