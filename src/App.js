import React from 'react';
import './App.css';

import TaskTable from './Component/TaskTable'

function App() {
  return (
    <div className="App">
      <body>
        <section class="section">
          <div class="container">
            <h1 class="title">Tagger Web</h1>
            <h2 class="subtitle">
              A simple application to manage your <strong>task</strong>.
            </h2>
          </div>
        </section>
        <TaskTable/>
      </body>
    </div>
  );
}

export default App;
