import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {getSuperTokensRoutesForReactRouterDom} from 'supertokens-auth-react';
import {SignInAndUp} from 'supertokens-auth-react/recipe/emailpassword';
import {BaseComponent, Home, About, Contact, Dashboard} from './App';
import SignInAndUpCustom from './themes/signInAndUp';

function AppWithReactDomRouter() {
  return (
    <div className="App">
      <Router>
        <Nav/> 
        <h1>With Routing</h1>
        <a href="/home?router=no-router">Switch</a><br/>
        <BaseComponent>
          <Switch>
            {getSuperTokensRoutesForReactRouterDom()}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/custom-supertokens-login">
              <SignInAndUp />
            </Route>
            <Route path="/session-exist">
              <SignInAndUp
                doesSessionExist={async () => {
                  return window.confirm("Does session exist?")
                }}
                onHandleSuccess={(context) => {
                  
                  return window.confirm(`onHandleSuccess call ${context.action}, onHandleSuccess?`);
                }}
              />
            </Route>
            <Route path="/custom-props">
              <SignInAndUp
            
                onHandleForgotPasswordClicked={async() => {
                  alert("will redirect to ForgotPassword");
                  return false;
                }}
            
                onCallSignUpAPI={async (requestJson, headers) => {
                  return {
                    status: "OK",
                    user: {
                      id: "1",
                      email: "john.doe@supertokens.io"
                    }
                  }
                }}

                            
                onHandleSuccess={async (context) => {
                  console.log("onHandleSuccess", context);

                }}
            
                onCallSignInAPI={async (requestJson, headers) => {
                  return {
                    status: "OK",
                    responseJson: {
                      user: {
                        id: "1",
                        email: "john.doe@supertokens.io"
                      }
                    }
                  }
                }}

              />
            </Route>
            <Route path="/custom">
              <SignInAndUp >
                <SignInAndUpCustom/>
              </SignInAndUp >
            </Route>
          </Switch>
        </BaseComponent>
      </Router>
    </div>
  );
}

function Nav () {
  return (
    <div className="header__menu menu">
    <div className="menu__icon icon-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav className="menu__body">
      <ul className="menu__list">
        <li key="home"><Link  className="menu__link" style={{ textDecoration: 'none' }} to="/">Home</Link></li>
        <li key="about"><Link className="menu__link" style={{ textDecoration: 'none' }} to="/about">About</Link></li>
        <li key="contact"><Link className="menu__link" style={{ textDecoration: 'none' }} to="/contact">Contact</Link></li>
        <li key="auth"><Link className="menu__link" style={{ textDecoration: 'none' }} to="/auth">Auth</Link></li>
        <li key="custom"><Link className="menu__link" style={{ textDecoration: 'none' }} to="/custom-supertokens-login">Custom route</Link></li>
        <li key="custom2"><a className="menu__link" style={{ textDecoration: 'none' }} href="/dashboard">Dashboard (Logged In)</a></li>
        <li key="custom6"><a className="menu__link" style={{ textDecoration: 'none' }} href="/auth/reset-password">Reset Password</a></li>
        <li key="custom3"><a className="menu__link" style={{ textDecoration: 'none' }} href="/custom-props">Custom login with props methods</a></li>
        <li key="custom4"><a className="menu__link" style={{ textDecoration: 'none' }} href="/custom-theme">Custom theme</a></li>
        <li key="custom5"><a className="menu__link" style={{ textDecoration: 'none' }} href="/session-exist">Session already exist.</a></li>
      </ul>
    </nav>
  </div>
  )
}

export default AppWithReactDomRouter;
