
import style from '../Style/Navbar.module.css';
import logo from '../asset/images/logo-bg.png';
import Account from './Account';

const navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a href="index.html" className={style.brand}>

            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>TAMIM</h3>
          </a>
        </li>
      </ul>
      <Account/>
    </nav>
  )
}

export default navbar