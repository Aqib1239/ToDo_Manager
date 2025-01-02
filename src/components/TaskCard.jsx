import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const TaskCard = ({ task, onEdit, onDelete }) => {
  
    return (
      <div className="bg-gray-200 p-4 rounded-2xl">
        <div>
          <h3 className="font-bold">Task {task.id} : {task.title}</h3>
          <p className="pt-2">{task.description}</p>
        </div>
  
        <div className="flex justify-between mt-6">
          <span
            className={`flex items-center border px-3 py-1 rounded-full text-black font-normal text-sm ${task.completed ? "bg-green-300" : "bg-red-300"}`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
  
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(task)}
              className="bg-blue-500 p-2 rounded-full text-white font-semibold hover:scale-100 scale-95 transition-all duration-200 hover:bg-blue-600"
            >
              <FaEdit size={22} />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="bg-red-500 p-2 rounded-full text-white font-semibold hover:scale-100 scale-95 transition-all duration-200 hover:bg-red-600"
            >
              <RiDeleteBin5Fill size={22} />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TaskCard;
  