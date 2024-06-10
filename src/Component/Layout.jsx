
import style from '../Style/Layout.module.css';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
    <main className ={style.main}>
    <div className={style.container}>
       {children}

    </div>
   </main>
       
    </>
  )
}

export default Layout