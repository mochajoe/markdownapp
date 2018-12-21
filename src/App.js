import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Markdownexample from './marker.js';
import marked from 'marked';

class App extends Component {
	constructor(props) {
		super(props)
	}

  getMarkdowntext() {
    let rawMarkup = marked('this is _Markdown_.', {sanitize:true});
    return {__html:rawMarkup}
  }

  render() {
    return (
    	<div>
        <textarea id="editor" rows="4" cols="50">
        </textarea>
          <div id = "preview">
            <div dangerouslySetInnerHTML = {this.getMarkdowntext()} />

          </div>
      </div>
    );
  }
}

export default App;

//////working on making smaller componentsddddddsdfsdfsdfsfsdsssfdsfssssssddssssdfsddssdfsssssdddsdfdsfddd