import React, { PureComponent } from 'react';

import TaskCard from './TaskCard';

class TaskTable extends PureComponent {
  render() {
    return (
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification is-black">
            <div class="content">
              <p class="title">Add Task</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Title"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Tags"
                    />
                  </div>
                </div>
                <div class="control">
                  <button class="button is-primary">Submit</button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-warning">
            <div class="content">
              <p class="title">Unstarted</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <TaskCard />
                <TaskCard />
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <div class="content">
              <p class="title">Started</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <TaskCard />
                <TaskCard />
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Finished</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <TaskCard />
                <TaskCard />
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default TaskTable;
