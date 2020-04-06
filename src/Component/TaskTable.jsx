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
      id: '',
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
    await todosStore.deleteItem(id);
    this.uploadTask();
  };

  changeStatusTask = async (id, status) => {
    if (status === 'unstarted') {
      status = 'started';
    } else if (status === 'started') {
      status = 'finished';
    }
    await todosStore.editItem(id, { status });
    this.uploadTask();
  };

  getEditTask = (data) => {
    this.setState({
      id: data._id,
      input_title: data.title,
      input_description: data.description,
      input_tags: data.tags,
    });
  };

  editTask = async () => {
    await todosStore.editItem(this.state.id, {
      title: this.state.input_title,
      description: this.state.input_description,
      tags: this.state.input_tags,
    });
    this.uploadTask();
    this.setState({
      id: '',
      input_title: '',
      input_description: '',
      input_tags: '',
    });
  };

  renderCard(status) {
    let context = this;
    const data = todosStore.data.filter((key) => key.status === status);
    return data.map(function (todo, index) {
      return (
        <TaskCard
          key={index}
          onEdit={context.getEditTask}
          onChangeStatus={context.changeStatusTask}
          onDelete={context.deleteTask}
          data={todo}
        />
      );
    });
  }

  logout = async () => {
    await todosStore.deinitialize();
    await userStore.deleteSingle();
  };

  render() {
    return (
      <div>
        <p>Hai, {userStore.data.email} !</p>
        <br />
        <button className="button is-primary" onClick={this.uploadTask}>
          Reprocess ({todosStore.countUnuploadeds()} data)
        </button>{' '}
        <button className="button is-danger" onClick={this.logout}>
          Logout
        </button>
        <hr />
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification is-black">
              <div className="content">
                <p className="title">Add/Edit Task</p>
                <p className="subtitle">Ungkapkan tantanganmu disini !</p>
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
                    {this.state.id === '' ? (
                      <button
                        className="button is-primary"
                        onClick={this.addTask}
                      >
                        Generate
                      </button>
                    ) : (
                      <div>
                        <button
                          className="button is-warning"
                          onClick={this.editTask}
                        >
                          Edit
                        </button>{' '}
                        <button
                          className="button"
                          onClick={() =>
                            this.setState({
                              id: '',
                              input_title: '',
                              input_description: '',
                              input_tags: '',
                            })
                          }
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-warning">
              <div className="content">
                <p className="title">Unstarted</p>
                <p className="subtitle">Jangan ragu untuk memulai !</p>
                <div className="content">{this.renderCard('unstarted')}</div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <div className="content">
                <p className="title">Started</p>
                <p className="subtitle">Trial, Error, Trial lagi !</p>
                <div className="content">{this.renderCard('started')}</div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-success">
              <div className="content">
                <p className="title">Finished</p>
                <p className="subtitle">Saatnya apresiasi dirimu !</p>
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
