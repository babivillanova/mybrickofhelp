import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Marketplace from './components/pages/Marketplace';
import Governance from './components/pages/Governance';
import FAQ from './components/pages/FAQ';
import Participate from './components/pages/Participate';


function App() {

  
  return (

      <>
        <Router>
          <Navbar />
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/marketplace' component={Marketplace} />
          <Route path='/participate' component={Participate} />
          <Route path='/governance' component={Governance} />
          <Route path='/faq' component={FAQ} />
          <Route path='/privacy-policy' component={() => { 
                window.location.href = 'https://example.com/1234'; 
                return null;
                }}/>
          </Switch>
        </Router>
      </>

  );
}

export default App;
