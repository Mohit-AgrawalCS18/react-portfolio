import React from 'react';
import Aboutus from './Pages/Aboutus';
import GlobalStyle from './Components/GlobalStyle';
import Nav from './Components/Nav';
import ContactUs from './Pages/ContactUs';
import  OurWork from './Pages/OurWork';
import MovieDetail from './Pages/MovieDetail';
import { Route, Switch, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Aboutus />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;