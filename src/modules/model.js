import Task from "./task.js";
import Project from "./project.js";

const newTask = new Task("Pack");
console.log(newTask);

const personal = new Project("Personal");
personal.addTask(newTask);
console.log(personal.getAllTasks());
