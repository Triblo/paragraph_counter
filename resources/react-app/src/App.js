import React, { useEffect } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <div className="App">
        <Layout>
        <Counter/>
      </Layout>
    </div>
  );
}

export default App;
