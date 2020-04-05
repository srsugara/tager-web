import React, { PureComponent } from 'react';

class TaskCard extends PureComponent {
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <div className="content">
              <div>
                <strong>John Smith</strong>{' '}
                <span className="tag is-info is-light">frontend</span>
                <br/>
                <small className="has-text-black">09:00 02-04-2020</small>
                <br />
                <div className="has-text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam
                  condimentum luctus turpis.
                </div>
              </div>
            </div>
            <div>
              <button className="button is-primary is-small">Edit</button>{' '}
              <button className="button is-danger is-small">Delete</button>{' '}
              <button className="button is-small">start</button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default TaskCard;
