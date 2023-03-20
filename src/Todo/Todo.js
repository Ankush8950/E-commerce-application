import React, { useState } from "react";
import AddTasks from "./AddTasks";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import UpdateTasks from "./updateTasks";
import { toast } from "react-toastify";

const Todo = () => {
  const [addtasks, setAddtasks] = useState("");
  // const [toggleTasks, setToggleTasks] = useState(false);
  const [updateTasks, setUpdatesTasks] = useState("");

  const [todo, setTodo] = useState([]);

  const onHandleTasks = (e) => {
    e.preventDefault();
    if (addtasks === "") {
      toast.error("Add todo");
    } else {
      let num = todo.length + 1;
      let newEntry = { id: num, title: addtasks, status: false };
      setTodo([...todo, newEntry]);
      setAddtasks("");
      toast.success("Tasks added successfull");
    }
  };

  const markDone = (id) => {
    const markdone = todo.map((tasks) => {
      if (tasks.id === id) {
        return { ...tasks, status: !tasks.status };
      }
      return tasks;
    });
    toast.success(`${id} is completed successfull`);
    setTodo(markdone);
  };

  const onHandleUpdate = (e) => {
    const newEntryData = {
      id: updateTasks.id,
      title: e.target.value,
      status: updateTasks.status ? true : false,
    };
    setUpdatesTasks(newEntryData);
  };

  const updateSubmit = (e) => {
    e.preventDefault();
    const filterTodo = [...todo].filter((task) => task.id !== updateTasks.id);
    const updateObject = [...filterTodo, updateTasks];
    setTodo(updateObject);
    setUpdatesTasks("");
    toast.success("Tasks update successfull");
  };

  const deleteTasks = (id) => {
    const deleteTodo = todo.filter((t) => t.id !== id);
    setTodo(deleteTodo);
    toast.success("Todo delete successfull");
  };

  return (
    <div className="todoPage">
      <h1>Todo App</h1>
      {updateTasks && updateTasks ? (
        <UpdateTasks
          setUpdateTaks={setUpdatesTasks}
          updateTaks={updateTasks}
          onHandleUpdate={onHandleUpdate}
          updateSubmit={updateSubmit}
        />
      ) : (
        <AddTasks
          setAddtasks={setAddtasks}
          addtasks={addtasks}
          onHandleTasks={onHandleTasks}
        />
      )}
      <div className="taskContainer">
        {todo && todo.length ? "" : <div className="nodata">
          <h2>No data...</h2>
        </div>}
        {todo &&
          todo
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((task, index) => {
              return (
                <>
                  <div className="tasks" key={task.id}>
                    <div className={task.status ? "done" : ""}>
                      <div className="taskNumber">{index + 1}</div>
                      <h3 className="title">
                        {task.title.charAt(0).toUpperCase() +
                          task.title.slice(1)}
                      </h3>
                    </div>
                    <div>
                      <span
                        className="statusIons"
                        onClick={() => markDone(task.id)}
                      >
                        <GrStatusGood size={17} className="statusIons" />
                      </span>
                      {task.status ? null : (
                        <span
                          className="editbtn"
                          onClick={() => {
                            setUpdatesTasks({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            });
                          }}
                        >
                          <FaRegEdit color="green" size={17} />
                        </span>
                      )}

                      <span
                        className="deleteTasks"
                        onClick={() => deleteTasks(task.id)}
                      >
                        <AiFillDelete color="red" size={20} />
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
      </div>
    </div>
  );
};

export default Todo;
