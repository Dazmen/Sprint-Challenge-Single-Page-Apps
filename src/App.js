import React from "react";
import Header from "./components/Header.js";
import { Switch, Route, Link } from 'react-router-dom';
import Welcome from './components/WelcomePage';
import Characters from './components/CharacterList';


export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        
        <Route path='/characters'>
          <Characters />
        </Route>

        <Route path='/'>
          <Welcome />
        </Route>

      </Switch>

    </main>
  );
}
