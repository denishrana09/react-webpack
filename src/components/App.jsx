import React, { Component } from 'react';
import Nav from './Nav';
import Icon from '../images/icon.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 4 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ value: 10 });
  }

  render() {
    const { value } = this.state;
    // console.log('7 ', process.env.NODE_ENV);
    console.log('20 ', value);
    return (
      <div>
        <h1>
          React App without
          <a href="https://github.com/facebook/create-react-app">CRA</a>
        </h1>
        <div className="temp">Hello there</div>
        <div className="t1">
          <div className="t2">
            <h4>How you doin</h4>
          </div>
        </div>
        <img alt="app-img" src={Icon} />
        <button type="button" onClick={this.handleClick} />
        <Nav />
      </div>
    );
  }
}

export default App;
