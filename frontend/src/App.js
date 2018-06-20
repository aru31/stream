import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbox from './api.js';

class App extends Component {
  constructor(props){
     super(props) ;
        this.state = {
      url: '',
    }
   /*   this.handleSearchQuery = this.handleSearchQuery.bind(this); */
      this.logout = this.logout.bind(this);
   }

  logout(e){
    e.preventDefault();
    localStorage.removeItem("persist:polls");
    window.location.reload();
    }

async componentDidMount () {
      const { default: WebSocket } = await import('./webSocket.js')
    } 

/*  handleSearchQuery(e){
    this.setState({
      url: e.target.value,
    });
  }
*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Searchbox />
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}


export default App;
