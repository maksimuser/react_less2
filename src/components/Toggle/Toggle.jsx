import { Component } from 'react';

class Toggle extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <>
        <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>

        {isOpen && children}
      </>
    );
  }
}

export default Toggle;
