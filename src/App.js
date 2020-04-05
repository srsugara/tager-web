import React from 'react';
import './App.css';
import todosStore from './store/todos'
import userStore from './store/user'
import config from './config';

import BaseComponent from './BaseComponent'
import TaskTable from './component/TaskTable'

// for playin in browser console
window.userStore = userStore;
window.todosStore = todosStore;


class App extends BaseComponent {
  state = {
    isInitialized: false,
  }

  render () {
    if (!this.state.isInitialized) {
      return null;
    }
    return (
      userStore.data.email ? (
        <div className="App">
          <section className="section">
            <div className="container">
              <h1 className="title">Tagger Web</h1>
              <h2 className="subtitle">
                A simple application to manage your <strong>task</strong>.
              </h2>
            </div>
          </section>
          <TaskTable/>
        </div>
      ) : (
        <Login />
      )
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

class Login extends BaseComponent {
  state = {
    email: '',
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <h1>login</h1>
        <p>
          email <input type='text' value={this.state.email} onChange={this.setInput_email} />
        </p>
        <p>
          <button>submit</button>
        </p>
      </form>
    );
  }

  setInput_email = (event) => {
    this.setState({
      email: (event.target.value || '').trim(),
    });
  }

  submit = async (event) => {
    event.preventDefault();

    if (!this.state.email) {
      alert('Use your @gmail.com account');
      return;
    }
    if (!this.state.email.endsWith('@gmail.com')) {
      alert('Use your @gmail.com account');
      return;
    }

    let id = this.state.email;
    id = id.split('@').shift().replace(/\W/g, '');

    await userStore.editSingle({
      id,
      email: this.state.email,
    });
  }
}

export default App;
