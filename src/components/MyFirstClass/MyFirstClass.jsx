import React, { Component } from 'react';

class MyFirstClass extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={event => console.log(event)}>
          Push me!
        </button>
      </div>
    );
  }
}

export default MyFirstClass;
