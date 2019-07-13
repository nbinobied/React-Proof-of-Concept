import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Posts from './components/Posts';
import Post from './components/Post';

import './App.css';

function App() {
  return (
    <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/:id" component={Post} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;