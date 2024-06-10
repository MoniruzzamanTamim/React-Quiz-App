
import Button from '../Component/Button';
import CheckBox from '../Component/CheckBox';
import Form from '../Component/Form';
import Illustration from '../Component/Illustration';
import InputText from '../Component/InputText';
import '../Style/App.css';
const Signup = () => {
  return (
    <div className="signup">
        <h1>Create an account</h1>
        <div className= "column">

            <Illustration/>
            <Form>
              <InputText type="text" placeholder="Enter Your Name" icon='person'  />
              <InputText type="email" placeholder="Enter Your Email" icon="alternate_email" />
              <InputText type="password" placeholder="Create New Password" icon="lock" />
              <InputText type="password" placeholder="Confirm Your Password" icon="lock" />
              <CheckBox text="I agree to the Terms &amp; Conditions" />
             <Button>Submit NOW</Button>

              <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
            </Form>

        </div>
    </div>
  )
}

export default Signup