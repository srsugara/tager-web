import React from 'react';

function TaskCard (props) {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <div className="content">
              <div>
                <strong>{props.data.title}</strong>{' '}
                <span className="tag is-info is-light">{props.data.tags}</span>
                <br />
                <small className="has-text-black">{props.data.dirtyAt}</small>
                <br />
                <div className="has-text-black">{props.data.description}</div>
              </div>
            </div>
            <div>
              <button
                className="button is-primary is-small"
                onClick={() => props.onEdit(props.data)}
              >
                Edit
              </button>{' '}
              <button
                className="button is-danger is-small"
                onClick={() => props.onDelete(props.data._id)}
              >
                Delete
              </button>{' '}
              {props.data.status !== 'finished' ? ( 
                <button
                  className="button is-small status"
                  onClick={() =>
                    props.onChangeStatus(props.data._id, props.data.status)
                  }
                >
                  {props.data.status === 'unstarted' ? 'start' : 'finish'}
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </article>
      </div>
    )
}

export default TaskCard;
