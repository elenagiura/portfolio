import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
  	<React.Fragment>
	    <Header />
	    <AboutMe />
	    <Projects />
	    <ContactMe />
	    <Footer />
    </React.Fragment>
  );
}

export default App;