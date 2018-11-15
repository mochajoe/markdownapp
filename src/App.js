import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class App extends Component {
	constructor(props) {
		super(props)
		this.setState({

		})
	}
  render() {
    return (
    	<div>
      <textarea id="editor" rows="4" cols="50">
      </textarea>
      <div id = "preview">
       


      </div>
      </div>
    );
  }
}

export default App;
