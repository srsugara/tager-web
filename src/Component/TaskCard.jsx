import React, { PureComponent } from 'react';

class TaskCard extends PureComponent {

  render() {
    let props
    if (this.props.data) {
      props = this.props.data
    }
    return (
      <div className="box">
        <article className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <div className="content">
              <div>
                <strong>{props.title}</strong>{' '}
                <span className="tag is-info is-light">{props.tags}</span>
                <br/>
                <small className="has-text-black">{props.created_date}</small>
                <br />
                <div className="has-text-black">
                  {props.description}
                </div>
              </div>
            </div>
            <div>
              <button className="button is-primary is-small">Edit</button>{' '}
              <button className="button is-danger is-small" onClick={()=>this.props.deleteValue(props._id)}>Delete</button>{' '}
              <button className="button is-small">start</button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default TaskCard;
