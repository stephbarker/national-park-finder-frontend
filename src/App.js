import {useState} from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {Switch, Route, withRouter} from 'react-router-dom';

import {getUser} from './services/userService';




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

  return (
    <div className="App">
     <Header user={userState.user} />
     <Switch>
       <Route exact path='/' render={(props) =>
        <HomePage /> 
       }/>
      <Route exact path='/dashboard' render={(props) =>
       <DashboardPage />
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
