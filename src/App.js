import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />  
        <Footer />
      </div>
    );
  }
}

export default App;
