import React, { PureComponent } from 'react';

class TaskCard extends PureComponent {
  render() {
    return (
      <div class="box">
        <article class="media">
          <div class="media-left">
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <span class="tag is-info is-light">frontend</span>{' '}
                <small>09:00 02-04-2020</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <div>
              <button class="button is-primary is-small">Edit</button>{' '}
              <button class="button is-danger is-small">Delete</button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default TaskCard;
