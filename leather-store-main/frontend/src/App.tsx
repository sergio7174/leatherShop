import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './components/Router';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className='backImage'>
          <ScrollToTop />
          <Header />
          <Router />
          <Footer />
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
