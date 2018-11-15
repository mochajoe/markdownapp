import { Component } from 'react';
import marked from 'marked';


class Markdownexample extends Component {
  getMarkdowntext() {
  	let rawMarkup = marked('this is _Markdown_.', {sanitize:true});
  	return {__html:rawMarkup}
  }
};

export default Markdownexample;
