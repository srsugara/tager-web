import React from 'react';

import BaseComponent from '../BaseComponent';
import TaskCard from './TaskCard';
import todosStore from '../store/todos';
import userStore from '../store/user';

class TaskTable extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      input_title: '',
      input_description: '',
      input_tags: '',
    };
  }

  componentDidMount() {
    this.unsubTodos = todosStore.subscribe(this.rerender);
  }

  componentWillUnmount() {
    this.unsubTodos();
  }

  addTask = async (event) => {
    event.preventDefault();
    await todosStore.addItem(
      {
        title: this.state.input_title,
        description: this.state.input_description,
        tags: this.state.input_tags,
        status: 'unstarted',
      },
      userStore.data
    );
    this.uploadTask();
    this.setState({
      input_title: '',
      input_description: '',
      input_tags: '',
    });
  };

  setInputTitle = (event) => {
    this.setState({
      input_title: event.target.value,
    });
  };

  setInputDescription = (event) => {
    this.setState({
      input_description: event.target.value,
    });
  };

  setInputTags = (event) => {
    this.setState({
      input_tags: event.target.value,
    });
  };

  uploadTask = async () => {
    try {
      await todosStore.upload();
    } catch (err) {
      alert(err.message);
    }
  };

  deleteTask = async (id) => {
    await todosStore.deleteItem(id, userStore.data);
    this.uploadTask();
  };

  renderCard(status) {
    let context = this;
    const data = todosStore.data.filter((key) => key.status === status);
    return data.map(function (todo, index) {
      return <TaskCard key={index} onDelete={context.deleteTask} data={todo} />;
    });
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
          <button onClick={this.uploadTask}>
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
                        value={this.state.input_title}
                        onChange={this.setInputTitle}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        type="text"
                        placeholder="Description"
                        value={this.state.input_description}
                        onChange={this.setInputDescription}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Tags"
                        value={this.state.input_tags}
                        onChange={this.setInputTags}
                      />
                    </div>
                  </div>
                  <div className="control">
                    <button
                      className="button is-primary"
                      onClick={this.addTask}
                    >
                      Generate
                    </button>
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
                <div className="content">{this.renderCard('unstarted')}</div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <div className="content">
                <p className="title">Started</p>
                <p className="subtitle">With even more content</p>
                <div className="content">{this.renderCard('started')}</div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-success">
              <div className="content">
                <p className="title">Finished</p>
                <p className="subtitle">With even more content</p>
                <div className="content">{this.renderCard('finished')}</div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskTable;
