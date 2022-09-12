import React from 'react';
import { createRoot } from 'react-dom/client';

// class-based component
import TodoContainer from './components/TodoContainer';

// stylesheet
import './App.css';

const root = document.getElementById('root');
const container = createRoot(root);
container.render(
   <React.StrictMode>
      <TodoContainer />
   </React.StrictMode>,
);
