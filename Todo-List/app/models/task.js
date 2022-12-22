const fs = require("fs");

// Create
const createTask = (title, description) => {
  const newTask = {
    id: Math.floor(Math.random() * 10).toString(),
    title,
    description,
  };
  let taskList = readAllTask();
  taskList = [...taskList, newTask];
  fs.writeFileSync("task.json", JSON.stringify(taskList));
  return newTask;
};

// Read all task
const readAllTask = () => {
  const buffer = fs.readFileSync("task.json");
  const taskString = buffer.toString();
  const taskJson = JSON.parse(taskString);
  return taskJson;
};

// Read detail
const readDeTail = (id) => {
  const taskList = readAllTask();
  const task = taskList.find((task) => {
    return task.id === id;
  });
  return task;
};

// Update
const updateTask = (id, title, description) => {
  let taskList = readAllTask();
  const index = taskList.findIndex((task) => {
    return task.id === id;
  });
  if (index !== -1) {
    const oldTask = taskList[index];
    const newTask = { ...oldTask, title, description };
    taskList[index] = newTask;
    fs.writeFileSync("task.json", JSON.stringify(taskList));
    return newTask;
  } else {
    return false;
  }
};

// Delete task
const deleteTask = (id) => {
  let taskList = readAllTask();
  let index = taskList.findIndex((task) => {
    return task.id === id;
  });

  if (index !== -1) {
    const deletedTask = taskList[index];
    taskList = taskList.filter((task) => {
      return task.id !== id;
    })
    fs.writeFileSync("task.json", JSON.stringify(taskList));
    return deletedTask;
  } else {
   return false;
  }
};

module.exports = {
  readAllTask,
  createTask,
  readDeTail,
  updateTask,
  deleteTask,
};
