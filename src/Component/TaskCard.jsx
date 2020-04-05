import React, { PureComponent } from 'react';

class TaskCard extends PureComponent {
  render() {
    return (
      <div class="box">
        <article class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong>{' '}
                <span class="tag is-info is-light">frontend</span>
                <br/>
                <small class="has-text-black">09:00 02-04-2020</small>
                <br />
                <div class="has-text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam
                  condimentum luctus turpis.
                </div>
              </p>
            </div>
            <div>
              <button class="button is-primary is-small">Edit</button>{' '}
              <button class="button is-danger is-small">Delete</button>{' '}
              <button class="button is-small">start</button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default TaskCard;
