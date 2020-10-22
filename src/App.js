import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import LampControl from './container/lampControl';
import Lamps from './container/lamps';

function App() {
  const [iNumber, setINumber] = useState('');

  const iNumberChangedHandler = (e) => {
    e.preventDefault();
    setINumber(e.target.value);
  };

  return (
    <>
      <BrowserRouter>
        <Header changed={iNumberChangedHandler} value={iNumber} />
        <main className="px-24 py-6">
          <Switch>
            <Route exact path="/">
              <Lamps iNumber={iNumber} />
            </Route>
            <Route exact path="/lamps/:id">
              <LampControl />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
