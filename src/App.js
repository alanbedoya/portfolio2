import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './global/globalStyles';
import NavSection from './components/navSection';
import AboutMe from './pages/aboutMe';
import MyWork from './pages/myWork';
import ContactMe from './pages/contactMe';
import FooterSection from './components/footerSection';
import ProjectDetail from './pages/projectDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyles />
      <NavSection />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutMe />
          </Route>
          <Route path='/work' exact>
            <MyWork />
          </Route>
          <Route path='/work/:id'>
            <ProjectDetail />
          </Route>
          <Route path='/contact'>
            <ContactMe />
          </Route>
        </Switch>
      </AnimatePresence>
      <FooterSection />
    </div>
  );
}

export default App;
