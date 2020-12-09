import {useState} from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {Switch, Route, withRouter, Redirect} from 'react-router-dom';

import {getUser, logout} from './services/userService';


function App(props) {
  /* component state */
  const [userState, setUserState] = useState({user: getUser()});

  /* helper functions */
  function handleSignupOrLogin() {
    // place user into state using setter function
    setUserState({user: getUser()});
    //programmatically route user to dasboard
    props.history.push('/dashboard');
  }

  function handleLogout() {
    logout(); //this removes the token from localstorage
    setUserState({user: null});
    props.history.push('/');
  }

  return (
    <div className="App">
     <Header user={userState.user} handleLogout={handleLogout} />
     <Switch>
       <Route exact path='/' render={(props) =>
        <HomePage /> 
       }/>
      <Route exact path='/dashboard' render={(props) =>
        getUser() ?
       <DashboardPage />
       :
       <Redirect to='/login' />
       }/>
      <Route exact path='/login' render={(props) =>
       <LoginPage handleSignupOrLogin={handleSignupOrLogin}/>
       }/>
     <Route exact path='/signup' render={(props) =>
      <SignupPage handleSignupOrLogin={handleSignupOrLogin}/>
      }/>
     </Switch>
     <Footer />
    </div>
  );
}

export default withRouter(App);
