import React from 'react';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4 text-green-500">Task Manager</h1>
        <div className="w-[600px] m-auto border border-">
          <TaskForm />
        </div>
      </div>
    </>
  );
}

export default App;
