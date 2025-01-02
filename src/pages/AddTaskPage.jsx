import React, { useState } from "react";

const AddTaskPage = ({ isOpen, onClose, onAddTask }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    completed: "Pending",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskData);
    setTaskData({
      title: "",
      description: "",
      completed: false,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-all duration-300 ease-in-out">
      <div className="bg-green-200 p-6 rounded-2xl w-96 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="font-medium">Task Title</label>
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            placeholder="Enter Task Title"
            className="border border-gray-300 px-4 py-2 w-full my-2.5 rounded-full"
          />
          <label htmlFor="description" className="font-medium">Description</label>
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            placeholder="Enter Task Description"
            className="border border-gray-300 px-4 py-2 w-full my-2.5 rounded-xl"
          />
          <div className="my-4">
            <p className="font-medium">Task Status</p>
            <div className="flex gap-8 items-center mt-2">
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  name="status"
                  value="Pending"
                  checked={taskData.completed === "Pending"}
                  onChange={handleChange}
                  className="w-4 h-4 mr-1"
                />
                Pending
              </label>
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  name="status"
                  value="Completed"
                  checked={taskData.completed === "Completed"}
                  onChange={handleChange}
                  className="w-4 h-4 mr-1"
                />
                Completed
              </label>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-400 transition-all duration-200 w-full"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-400 transition-all duration-200 w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskPage;
