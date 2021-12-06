import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';

import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
function App() {
    const user =NULL;
  return (
    <div className="app">
      <Router>
          {!user ? (
              <LoginScreen/>
          ) : (
          
          
              <Switch>
                  
                  <Route exact path= "/">
                      <HomeScreen />
                  </Route>
              </Switch>
          )}
      </Router>
    </div>
  );
}

export default App;
