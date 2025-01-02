import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, editTask, deleteTask, selectTasks } from '../redux/taskSlice';
import TaskCard from '../components/TaskCard';
import AddTaskPage from './AddTaskPage';
import EditTaskPage from './EditTaskPage';
import { MdOutlineAddCircle } from 'react-icons/md';
import { toast } from 'react-hot-toast';

const HomePage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Fetch tasks when the component mounts
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Functions to open and close Add modals
  const handleAddTask = (newTask) => {
    dispatch(addTask(newTask));
    setIsAddModalOpen(false);
    toast.success("Task added successfully!");
  };

  // Functions to open and close Edit modals
  const handleEditTask = (updatedTask) => {
    dispatch(editTask(updatedTask));
    setIsEditModalOpen(false);
    toast.success("Task updated successfully!");
  };

  // Function to delete a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
    toast.success("Task deleted successfully!");
  };

  return (
    <div className="p-4 mb-2 mt-24">
      <h2 className="text-xl font-bold ml-8">Your Tasks</h2>
      <div className="border-b-4 border-blue-600 mb-8 ml-8 w-[6.8rem] rounded-full"></div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          //  Render TaskCard component for each task
          <TaskCard
            key={task.id}
            task={task}
            onEdit={() => {
              setTaskToEdit(task);
              setIsEditModalOpen(true);
            }}
            onDelete={() => handleDeleteTask(task.id)}
          />
        ))}
      </div>

      {/* Add Task Button */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="flex items-center fixed bottom-10 right-10 text-blue-500 bg-black font-semibold text-xl rounded-full shadow-lg shadow-black/50 hover:shadow-lg hover:shadow-black/50 scale-125 hover:scale-150 transition-all duration-200 ease-in-out hover:bg-white"
      >
        <MdOutlineAddCircle size={60} className="text-primary" />
      </button>

      {/* Add Task Modal */}
      {isAddModalOpen && (
        <AddTaskPage
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddTask={handleAddTask}
        />
      )}

      {/* Edit Task Modal */}
      {isEditModalOpen && (
        <EditTaskPage
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          taskToEdit={taskToEdit}
          onEditTask={handleEditTask}
        />
      )}
    </div>
  );
};

export default HomePage;
