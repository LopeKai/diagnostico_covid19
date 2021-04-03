import React from 'react'
import './App.css';

import Header from './components/header'
import Form from './components/form'


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
