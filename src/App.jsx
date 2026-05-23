import { useState, useEffect } from 'react'


const API_URL = import.meta.env.VITE_API_URL;

function App() {
  let [tasks, setTasks] = useState([]);
  let [taskName, setTaskName] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);
 

  async function handleAddTask() {
    if (taskName === "") return;
    const res = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: taskName }),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setTaskName("");
  }

  async function handleMarkAsDone(id) {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PATCH",
    });
    const updatedTask = await res.json();
    const newTasks = tasks.map((task) =>
      task._id === updatedTask._id ? updatedTask : task,
    );
    setTasks(newTasks);
  }

  async function handleDeleteTask(id) {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task._id !== id));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <h1>Mini Task Tracker</h1>
      <form style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <label for="task">Task:</label>
        <input
          type="text"
          id="task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            handleAddTask();
          }}
        >
          Add Task
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task) => (
          <li
            key={task._id}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span>{task.name}</span>
            <button
              type="button"
              onClick={() => handleMarkAsDone(task._id)}
              style={{ backgroundColor: task.status === "done" ? "green" : "" }}
            >
              ✓
            </button>
            <button type="button" onClick={() => handleDeleteTask(task._id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
