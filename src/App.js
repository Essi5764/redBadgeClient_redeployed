// import React from 'react';
// import './App.css';
import Signin from './SigninPage/Signin';
import Signup from './SignupPage/Signup';
import WelcomePage from './WelcomePage/WelcomePage';
import UserPage from './UserPage/UserPage';
import InstructorPage from './InstructorPage/InstructorPage';
import AdminPage from './AdminPage/AdminPage';
// import { BrowserRouter as Router, }
import {Switch, Route, Redirect } from 'react-router-dom';


import './App.css';
import React,{useState, useEffect} from 'react';



function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [sessionRole, setSessionRole] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken('token');
      setSessionRole('role');
    }
  },[])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
    
  };
  const updateRole = (newRole) =>{
    localStorage.setItem('role',newRole);
    setSessionRole(newRole);
    console.log(sessionRole);
  }

  const clearToken = () =>{
    localStorage.clear();
    setSessionToken('');
  }

  
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">{localStorage.getItem('token')? 
            localStorage.getItem('role') === 'user'?
            <Redirect to="/userpage"/> :
            localStorage.getItem('role') === 'teacher'?
            <Redirect to="/instructor" />:
            localStorage.getItem('role') === 'admin'?
            <Redirect to="/admin" />:
            <WelcomePage />:
            <WelcomePage/>}
          </Route>
          <Route exact path="/"><WelcomePage /></Route>
          <Route exact path="/signin"><Signin updateToken={updateToken} updateRole={updateRole}/></Route>
          <Route exact path="/signup"><Signup updateToken={updateToken} updateRole={updateRole}/></Route>
          <Route exact path="/userpage"><UserPage updateToken={updateToken}  clickLogout={clearToken}/></Route>
          <Route exact path="/instructor"><InstructorPage updateToken={updateToken} updateRole={updateRole} clickLogout={clearToken}/></Route>
          <Route exact path="/admin"><AdminPage/></Route>
        </Switch>


        
      </div>
    );
  
  
}

export default App;
