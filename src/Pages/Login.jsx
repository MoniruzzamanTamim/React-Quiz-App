import Button from '../Component/Button';
import Form from '../Component/Form';
import Illustration from '../Component/Illustration';
import InputText from '../Component/InputText';
import '../Style/App.css';


const Login = () => {
  return (
    <div>
           

            <div className='login' >
        <h1>LOGIN an account</h1>
        <div className= "column">

            <Illustration/>
            <Form>
            <InputText type='Email' placeholder='Type Your Email' icon='alternate_email' />
            <InputText type='password' placeholder='Type Your Password' icon='lock' />
             
            <Button>LOG IN</Button>

              <div className="info">
              Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
            </Form>

        </div>
    </div>
    </div>
  )
}

export default Login
