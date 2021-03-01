import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

if (process.env.NODE_ENV === 'development') {
  console.log('Looks like we are in the development mode!');
}

class App extends React.Component {
  render() {
    return <h1>Hello React</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
