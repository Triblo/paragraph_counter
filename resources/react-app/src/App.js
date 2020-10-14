import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Layout from './components/Layout/Layout';

export default function App() {
  return (
    <div className="App">
       <Layout>
        <Counter/>
      </Layout>
    </div>
  );
}
