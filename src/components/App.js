import React, { Component } from 'react';
import Icon from '../images/icon.png';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React App without <a href="https://github.com/facebook/create-react-app">CRA</a></h1>
        <div className="temp">Temp Text</div>
        <div className="t1">
          <div className="t2">
            <h4>Another Temp text!!</h4>
          </div>
        </div>
        <img src={Icon}></img>
      </div>
    );
  }
}

export default App;