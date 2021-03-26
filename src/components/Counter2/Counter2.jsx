import React from 'react';
import Controls from './Controls';
import styles from './Counter2.module.css';
import Value from './Value';

class Counter2 extends React.Component {
  // =====================================================================
  // когда нужно передать обработчик события в элемент DOM, то привязка this осуществляется через объявление метода как публичное свойство класса и через стрелочную функцию
  // для доступности к объекту события добавляем кросс-браузерную обертку SyntheticEvent Object (evt), и далее можем добавить любые свойства и методы как и у нативного события
  /*
  handleIncrement = evt => {
    console.log('клик в кнопку увеличить на 1');

    //   для использования в асинхронном коде необходимо сохранить значение в переменной (см.пример ниже)

    // const { target } = evt;
    const target = evt.target;

    setTimeout(() => {
      console.log(target);
    }, 2000);
  };
*/
  // ========================================================================
  /*
  // old-school
  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this); //  привязка контекста через конструктор (рекомендуемый способ, но чище через публичное свойство)

    this.state = {
      value: 0,
    };
  }
  */
  static defaultProps = {
    initialValue: 2,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
    // value: 0,
    a: 3,
    d: 9,
  };

  /*
  // данный метод удобен для перезаписи значения, но не для обновления от предыдущего значения
  handleIncrement = () => {
    // this.state.value = 6; // НИКОГДА ТАК НЕ ДЕЛАТЬ!!!

    //   для обновления состояния используем метод setState()
    //   обновление происходит следующим образом: в новый объект распыляется текущее состояние и обновляемое (см.конспект)
    this.setState({
      value: 132,
      a: 12,
      d: 39,
    });
  };
*/
  // для обновления от предыдущего значения нужно использовать setState() не как  объект, а как функцию
  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));

    // this.setState(prevState => {
    //   return {
    //     value: prevState.value + 1,
    //   };
    // });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.Counter}>
        <Value value={value} />
        {/* <span className={styles.Counter__value}>{this.state.value}</span> */}

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />

        {/* <div className={styles.Counter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter2;
