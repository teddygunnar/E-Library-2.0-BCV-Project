import React from 'react';
import StartPage from './StartPage';
import Home from './Home';
import Catalogue from './Catalogue';
import About from './About';
import Riset from './Riset';
import Faq from './Faq';
import Login from './Login';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
      <Route exact path="/" component={StartPage} />
      <Route exact path ="/navbar" component={NavBar}/>
      <Route exact path="/home" component={Home} />
      <Route exact path="/catalogue" component={Catalogue} />
      <Route exact path="/about" component={About} />
      <Route exact path="/riset" component={Riset} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;