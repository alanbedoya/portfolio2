import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './global/globalStyles';
import NavSection from './components/navSection';
import AboutMe from './pages/aboutMe';
import MyWork from './pages/myWork';
import ContactMe from './pages/contactMe';
import ProjectDetail from './pages/projectDetail';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <NavSection />
      <Switch>
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
    </div>
  );
}

export default App;
