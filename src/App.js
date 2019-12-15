import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import { Routes } from './inc/routes'
import { ReviewsContext } from './inc/ReviewsContext'

import { Header } from './components/Header'
import { Author } from './components/Author'
import { Homepage } from './components/Homepage'
import { Reviews } from './components/Reviews'
import { ReviewSingle } from './components/ReviewSingle'
import { Shop } from './components/Shop'
import { NoMatch } from './components/NoMatch'


function App() {
  const [reviews] = useState([
    {
      title: 'Review 1',
      text: 'Some review',
      author: 'Alex Yatseyko',
      id: 1
    },
    {
      title: 'Review 2',
      text: 'Some review',
      author: 'Marianna Bratushchyk-Khoma',
      id: 2
    },
    {
      title: 'Review 3',
      text: 'Some review',
      author: 'Oleh Yatseyko',
      id: 3
    },
    {
      title: 'Review 4',
      text: 'Some review',
      author: 'Marianna Bratushchyk-Khoma',
      id: 4
    },
  ])

  return (
    <BrowserRouter>
      <ReviewsContext.Provider value={reviews}>
        <div className="App">
        <Header />
        <Switch>
          <Route exact path={Routes.HOME} component={Homepage} />
          <Route exact path={Routes.SHOP} component={Shop} />
          <Route exact path={Routes.REVIEWS} component={Reviews} />
          <Route exact path={Routes.REVIEW_PAGE} component={ReviewSingle} />
          <Route exact path={Routes.AUTHOR} component={Author} />
          <Route component={NoMatch} />
        </Switch>
        </div>
      </ReviewsContext.Provider>
    </BrowserRouter >
  );
}

export default App;
