import React, { PureComponent } from 'react'

import TaskCard from './TaskCard'

class TaskTable extends PureComponent {
	render() {
		return (
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="notification">
            <div class="content">
              <p class="title">Unstarted</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <TaskCard/>
                <TaskCard/>
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
                <TaskCard/>
                <TaskCard/>
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
                <TaskCard/>
                <TaskCard/>
              </div>
            </div>
          </article>
        </div>
      </div>
    )
	}
}

export default TaskTable