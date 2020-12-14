import {signUp} from '../services/userService';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './SignupPage.css'

function SignupPage(props) {

    const[formState, setFormState] = useState({
        name:'',
        email:'',
        password:''
    });

    function formValid() {
        return !!(formState.name && formState.email && formState.password)
    }

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if(!formValid()) return;
        try {
            await signUp(formState);
            props.handleSignupOrLogin();
        } catch(error) {
            alert(error.message);
        }
    }

    return (
    <main className='Page'>
      <section className='signup-page'>
        <h1 className='signup-title'>Sign Up !</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input name="name" type="text" className="form-control" placeholder="Name" value={formState.name} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input name="email" type="email" className="form-control" placeholder="Email" value={formState.email} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input name="password" type="password" className="form-control" placeholder="Password" value={formState.password} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <input disabled={!formValid()} type="submit" className="btn btn-default signup-btn" value="Sign Up" />
              &nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
        </section>
    </main>
  )  
}

export default SignupPage;