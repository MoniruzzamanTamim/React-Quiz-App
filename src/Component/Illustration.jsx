import style from '../Style/Illustration.module.css'
import image from '../asset/images/signup.svg'

const Illustration = () => {
  return (
    <div className={style.illustration}>
    <img src={image} alt="Signup" />
    
  </div>
  )
}

export default Illustration