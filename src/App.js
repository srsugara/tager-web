import React from 'react';
import './App.css';
import todosStore from './store/todos';
import userStore from './store/user';
import config from './config';

import BaseComponent from './BaseComponent';
import TaskTable from './component/TaskTable';

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
            <h1 className="title">Tagger Web</h1>
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

class Login extends BaseComponent {
  state = {
    email: '',
  };

  setInputEmail = (event) => {
    this.setState({
      email: (event.target.value || '').trim(),
    });
  };

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
  };

  render() {
    return (
      <div>
        <section className="hero is-fullheight is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <article className="card is-rounded">
                  <br />
                  <center>
                    <h1 className="title">
                      <div className="has-text-black">Tager Login</div>
                    </h1>
                  </center>
                  <div className="card-content">
                    <p className="control">
                      <input
                        className="input"
                        type="email"
                        value={this.state.email}
                        onChange={this.setInputEmail}
                        placeholder="Email"
                      />
                    </p>
                    <br />
                    <p className="control">
                      <button
                        className="button is-primary is-medium is-fullwidth"
                        onClick={this.submit}
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
