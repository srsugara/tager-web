import React from 'react';
import './App.css';
import todosStore from './store/todos';
import userStore from './store/user';
import config from './config';

import BaseComponent from './BaseComponent';
import Login from './page/Login'
import TaskTable from './components/TaskTable';

// for playin in browser console
window.userStore = userStore;
window.todosStore = todosStore;

class App extends BaseComponent {
  state = {
    isInitialized: false,
  };

  render() {
    if (!this.state.isInitialized) {
      return null;
    }
    return userStore.data.email ? (
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="title">Tager Web</h1>
            <h2 className="subtitle">
              A simple application to manage your <strong>task</strong>.
            </h2>
          </div>
        </section>
        <TaskTable />
      </div>
    ) : (
      <Login />
    );
  }

  async componentDidMount() {
    await userStore.initialize();
    this.setState({
      isInitialized: true,
    });

    this.unsubUser = userStore.subscribe(this.rerender);
  }

  async componentDidUpdate() {
    if (userStore.data.email && !todosStore.isInitialized) {
      todosStore.setName(config.dbName);
      await todosStore.initialize();
    }
  }

  componentWillUnmount() {
    this.unsubUser();
  }
}

export default App;
