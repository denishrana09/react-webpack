import React, { Component } from 'react';
import Nav from './Nav';
import Icon from '../images/icon.png';

class App extends Component {
  render() {
    // console.log('7 ', process.env.NODE_ENV);
    return (
      <div>
        <h1>React App without <a href="https://github.com/facebook/create-react-app">CRA</a></h1>
        <div className="temp">Hello there</div>
        <div className="t1">
          <div className="t2">
            <h4>How you doin</h4>
          </div>
        </div>
        <img src={Icon}></img>
        <Nav />
      </div>
    );
  }
}

export default App;