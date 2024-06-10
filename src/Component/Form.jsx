import style from '../Style/Form.module.css'
const Form = ({children, ...rest}) => {
  return (
    <>
   <form className={style.form} action="#" {...rest}>
           {children}
    </form>

    </>
  )
}

export default Form