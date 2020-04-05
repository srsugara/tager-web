import React, { PureComponent } from 'react'

import TaskCard from './TaskCard'

class TaskTable extends PureComponent {
	render() {
		return (
      <table class="table">
        <thead>
          <tr>
            <th>Unstarted</th>
            <th>Started</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <TaskCard/>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <TaskCard/>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td><TaskCard/></td>
          </tr>
        </tbody>
      </table>
    )
	}
}

export default TaskTable