import {useState} from 'react';
import { Link } from "react-router-dom";
import {login} from '../services/userService';

function LoginPage(props) {
    /* component state */
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    });
    /* handler function */
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault(); // disable default behaviour
        if(!formValid()) return; // make sure form is valid
        try {
            await login(formState)
            props.handleSignupOrLogin();
        } catch(error) {
            alert(error.message);
        }
    }

    /* helper functions */
    function formValid() {
        return !!(formState.email && formState.password);
    }

    return (
    <main className='Page'>
        <h1>
            Login Page
        </h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="col-sm-12">
                    <input onChange={handleChange} value={formState.email} name="email" placeholder="Email" className="form-control" type="email"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <input onChange={handleChange} value={formState.password}name="password" placeholder="Password" className="form-control" type="password"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <input disabled={!formValid()} value="Log In" className="btn btn-default" type="submit"/>
                    &nbsp;&nbsp;
                    <Link to="/">Cancel</Link>
                </div>
            </div>
        </form>
    </main>
  )  
}

export default LoginPage;