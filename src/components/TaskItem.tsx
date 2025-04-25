import React from 'react';

interface TaskItemProps {
  task: { id: number; title: string; completed: boolean };
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggleComplete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          id={`task-${task.id}`}
        />
        <label className={`form-check-label ${task.completed ? 'text-decoration-line-through' : ''}`} htmlFor={`task-${task.id}`}>
          {task.title}
        </label>
      </div>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default TaskItem;