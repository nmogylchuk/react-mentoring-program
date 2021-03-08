import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.js';
import 'index.scss';

class MovieApp extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<MovieApp />, document.getElementById('root'));
