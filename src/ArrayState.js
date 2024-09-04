import { useState } from "react";

var i = 5;
export default function ArrayState() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, name: "صلاة الفجر" },
    { id: 2, name: "أذكار الصباح" },
    { id: 3, name: "ترتيب الغرفة" },
    { id: 4, name: "الفطور" },
  ]);
  const tasksList = tasks.map((task) => {
    return (
      <li key={task.id}>
        {task.name}{" "}
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          تمت
        </button>
        <button
          onClick={() => {
            updateTask(task.id);
          }}
        >
          تعديل
        </button>
      </li>
    );
  });
  function addTaskButton() {
    setTasks([...tasks, { id: i, name: task }]);
    setTask("");
    i++;
  }
  function deleteTask(key) {
    const filterTask = tasks.filter((tas) => {
      return tas.id !== key;
    });
    setTasks(filterTask);
  }

  function updateTask(key) {
    var edit = window.prompt("ادخل التعديل هنا");
    const editedTasks = tasks.map((tas) => {
      if (tas.id == key) return { id: key, name: edit };
      else return tas;
    });
    setTasks(editedTasks);
  }

  return (
    <center
      style={{
        backgroundColor: "pink",
        textAlign: "center",
        boxShadow: "1px 2px 5px black",
      }}
    >
      <h2>قائمة المهام</h2>
      <ul style={{ direction: "rtl" }}>{tasksList}</ul>
      <input
        onChange={(event) => {
          setTask(event.target.value);
        }}
        value={task}
        type="text"
        style={{
          borderRadius: "10px",
          width: "60%",
          height: "20px",
          padding: "10px",
          margin: "10px",
        }}
      />
      <button
        onClick={() => addTaskButton()}
        style={{
          borderRadius: "5px",
          padding: "10px",
          margin: "10px",
          backgroundColor: "teal",
          color: "white",
          fontWeight: "bold",
        }}
      >
        إضافة مهمة
      </button>
    </center>
  );
}
