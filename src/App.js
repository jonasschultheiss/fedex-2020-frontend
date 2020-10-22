import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header';
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
        <Switch>
          <Route exact path="/">
            <Lamps iNumber={iNumber} />
          </Route>
          <Route exact path="/lamps/:id"></Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
