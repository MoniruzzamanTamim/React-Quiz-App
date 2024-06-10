import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import '../Style/App.css';
import Layout from './Layout';

function App() {
 

  return (
    <>
      
      <Layout>
        <Home/>
        <Signup/>
        <Login/>
       </Layout>
       
    </>
  )
}

export default App
