import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;

    // вычисляемое свойство
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>

        {this.props.options.map(({ label, color }, index) => (
          <button
            type="button"
            className={this.makeOptionClassName(index)}
            key={label}
            style={{ backgroundColor: color }}
            onClick={() => this.setActiveIdx(index)}
          ></button>
        ))}
      </div>
    );
  }
}

// const ColorPicker = ({ options }) => {
//   return (
//     <div className="ColorPicker">
//       <h2 className="ColorPicker__title">Color Picker</h2>
//       {options.map(({ label, color }) => (
//         <span
//           className="ColorPicker__option"
//           key={label}
//           style={{ backgroundColor: color }}
//         ></span>
//       ))}
//     </div>
//   );
// };

export default ColorPicker;
