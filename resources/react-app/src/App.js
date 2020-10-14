import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Layout from './components/Layout/Layout';

class App extends Component {

  componentDidMount()
  {
    fetch('http://127.0.0.1:8000/api/test')
    .then(function(response){
      response.json().then(function(resp){
        console.log(resp);
      })
    })
  }
  
  render() {
    return (
      <div className="App">
         <Layout>
          <Counter/>
        </Layout>
      </div>
    );
  }
}

export default App;
