import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './functionBased/App.css';

const root = document.getElementById('root');
const container = createRoot(root);
container.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
