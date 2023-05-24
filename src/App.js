import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);


    const fruit1 = 'mangga';
    const fruit2 = 'apple';
    const fruit3 = 'delima';
    const fruits = ['mangga', 'apple', 'delima', 'nanas']
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}

export default App;
