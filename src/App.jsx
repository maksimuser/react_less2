import React, { Component } from 'react';
// import Counter from './components/Counter/Counter';
// import MyFirstClass from './components/MyFirstClass/MyFirstClass';
// import Toggle from './components/Toggle/Toggle';
// import Counter2 from './components/Counter2';
// import ColorPicker from './components/ColorPicker';
// import Dropdown from './components/Dropdown';
import initialTodos from './todos.json';
import ToDoList from './components/ToDoList';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    // вычисляемые значения
    const totalTodoCoun = todos.length;
    // const completedTodo = todos.filter(todo => todo.completed);
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <>
        <h1>Состояние компонента</h1>
        <div>
          <p>Общее кол-во todo: {totalTodoCoun}</p>
          <p>Кол-во выполненных todo: {completedTodoCount}</p>
        </div>

        <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdown /> */}

        {/* <MyFirstClass /> */}
        {/* <Counter initialValue={10} /> */}
        {/* <Toggle>Show me!</Toggle> */}
        {/* <Counter2 /> */}
      </>
    );
  }
}

// const App = () => {
//   return (
//     <>
//       <h1>Состояние компонента</h1>
//       {/* <ToDoList /> */}
//       {/* <ColorPicker options={colorPickerOptions} /> */}
//       {/* <Dropdown /> */}

//       {/* <MyFirstClass /> */}
//       {/* <Counter initialValue={10} /> */}
//       {/* <Toggle>Show me!</Toggle> */}
//       {/* <Counter2 /> */}
//     </>
//   );
// };

export default App;
