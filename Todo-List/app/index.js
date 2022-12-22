const yargs = require("yargs");
const fs = require('fs');
const {readAllTask, createTask, readDeTail, updateTask, deleteTask} = require('../app/models/task');

// CRUD

// Create
yargs.command({
  command: "create",
  // Object de luu tru tham so
  builder: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { title, description } = args;
    const newTask = createTask(title, description);
    console.log("Đã tạo mới công việc thành công!!!",  newTask);
  }
});

// Read
// 1. Read-all
yargs.command({
  command: "read-all",
  handler: () => {
      const result = readAllTask();
      console.log(result);
  },
});

// 2. Read-detail
yargs.command({
  command: "read-detail",
  builder: {
    id: {
      type:"string"
    }
  },  
  handler: (args) => {
      const {id} = args;
      const findingTask = readDeTail(id);
      if(findingTask) {
        console.log("Task: ", findingTask);
      }
      else{
        console.log("Not found!!!")
      }
  },
});

// 3. Update
yargs.command({
  command: "update",
  builder: {
    id:{
      type:"string"
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const {id, title, description} = args;
    const updatedTask = updateTask(id,title,description);
    if(updatedTask) {
      console.log("Done");
    }
    else{
      console.log("Not found")
    }
  },
});

// 4. Delete
yargs.command({
  command: "delete",
  builder:{
    id:{
      type: "string"
    }
  },
  handler: (args) => {
    const {id} = args;
    const deletedTask = deleteTask(id);
    if(deletedTask){
      console.log("Done");
    }
    else{
      console.log("Not found!!!");
    }
  }
});

yargs.parse(); // Parse => Giong voi render
