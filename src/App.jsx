import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage';
import './App.css';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Navbar />
      {/* Provider for the Redux store */}
      <Provider store={store}>
        <HomePage />
      </Provider>
      <Toaster />
    </>
  );
};

export default App;
