import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import AddTaskForm from '../components/AddTaskForm';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskManagementPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Belajar React', completed: false },
    { id: 2, title: 'Membuat Komponen', completed: true },
    { id: 3, title: 'Integrasi dengan AdminLTE', completed: false },
  ]);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="container-fluid">
      <h1>Manajemen Tugas</h1>
      <AddTaskForm onAddTask={handleAddTask} />

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Tugas Belum Selesai</h3>
            </div>
            <div className="card-body">
              {incompleteTasks.length > 0 ? (
                <ul className="list-group">
                  {incompleteTasks.map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onDelete={handleDeleteTask}
                      onToggleComplete={handleToggleComplete}
                    />
                  ))}
                </ul>
              ) : (
                <p>Tidak ada tugas yang belum selesai.</p>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Tugas Selesai</h3>
            </div>
            <div className="card-body">
              {completedTasks.length > 0 ? (
                <ul className="list-group">
                  {completedTasks.map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onDelete={handleDeleteTask}
                      onToggleComplete={handleToggleComplete}
                    />
                  ))}
                </ul>
              ) : (
                <p>Tidak ada tugas yang sudah selesai.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagementPage;