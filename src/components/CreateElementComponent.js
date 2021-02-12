import React from 'react';

class CreateElementComponent extends React.Component {
  render() {
    return React.createElement('div', { className: 'createElementComponent' }, 'Hello React from CreateElementComponent');
  }
}

export default CreateElementComponent;
