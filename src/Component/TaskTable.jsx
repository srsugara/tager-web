import React from 'react';

import BaseComponent from '../BaseComponent';
import TaskCard from './TaskCard';
import todosStore from '../store/todos';
import userStore from '../store/user';

class TaskTable extends BaseComponent {
  componentDidMount() {
    this.unsubTodos = todosStore.subscribe(this.rerender);
  }

  componentWillUnmount() {
    this.unsubTodos();
  }

  renderCard(status) {
    const data = todosStore.data.filter(key => key.status === status);
    return data.map(function (todo, index) {
      return <TaskCard key={index} data={todo}/>
    })
  }

  render() {
    return (
      <div>
        <p>
          halo {userStore.data.email}{' '}
          <button onClick={this.logout}>logout</button>
        </p>

        <h2>
          todos:{' '}
          <button onClick={this.upload}>
            {`upload (${todosStore.countUnuploadeds()})`}
          </button>
        </h2>
        <pre>last upload: {todosStore.dataMeta.tsUpload}</pre>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification is-black">
              <div className="content">
                <p className="title">Add Task</p>
                <p className="subtitle">With even more content</p>
                <div className="content">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Title"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="Tags" />
                    </div>
                  </div>
                  <div className="control">
                    <button className="button is-primary">Submit</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-warning">
              <div className="content">
                <p className="title">Unstarted</p>
                <p className="subtitle">With even more content</p>
                <div className="content">
                 { this.renderCard('unstarted') }
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <div className="content">
                <p className="title">Started</p>
                <p className="subtitle">With even more content</p>
                <div className="content">
                { this.renderCard('started') }
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-success">
              <div className="content">
                <p className="title">Finished</p>
                <p className="subtitle">With even more content</p>
                <div className="content">
                { this.renderCard('finished') }
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskTable;
