import Task from "./task.js";
import Project from "./project.js";

const newTask = new Task("Pack");
console.log(newTask);

const personal = new Project("Personal");
personal.addTask(newTask);
console.log(personal.getAllTasks());

class toDoList {
  constructor() {}
}

// A function to return all tasks regardless of projects
// A function to return all tasks that is due for today
// A function to return all tasks that is due for this week
// A function to return all tasks that is important

// A function to save tasks to localStorage

const returnTasks =
  (...locationToCheck) =>
  (conditionsToCheck) => {
    // return tasks that meets conditions to check
  };

// const returnTodayTask = returnTasks(personal);
// const todayTaskFromPersonal = returnTodayTask(date);
