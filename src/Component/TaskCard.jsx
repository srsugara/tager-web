import React, { PureComponent } from 'react';

class TaskCard extends PureComponent {
  state = {
    input_title: '',
    input_description: '',
    input_tags: '',
    showEdit: false,
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
  toggleModal = () => {
    this.setState({
      showEdit: !this.state.showEdit,
    });
  };
  render() {
    let props;
    if (this.props.data) {
      props = this.props.data;
    }
    return (
      <div>
        <div className={'modal' + (this.state.showEdit ? 'is-active' : '')}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
            </header>
            <section className="modal-card-body">
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
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button" onClick={this.toggleModal}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
        <div className="box">
          <article className="media">
            <div className="media-left"></div>
            <div className="media-content">
              <div className="content">
                <div>
                  <strong>{props.title}</strong>{' '}
                  <span className="tag is-info is-light">{props.tags}</span>
                  <br />
                  <small className="has-text-black">{props.created_date}</small>
                  <br />
                  <div className="has-text-black">{props.description}</div>
                </div>
              </div>
              <div>
                <button
                  className="button is-primary is-small"
                  onClick={this.toggleModal}
                >
                  Edit
                </button>{' '}
                <button
                  className="button is-danger is-small"
                  onClick={() => this.props.onDelete(props._id)}
                >
                  Delete
                </button>{' '}
                <button
                  className="button is-small"
                  onClick={() =>
                    this.props.onChangeStatus(props._id, props.status)
                  }
                >
                  start
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default TaskCard;
