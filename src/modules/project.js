import { toSentenceCase } from "../utils/utils.js";
export default class Project {
  tasks;
  constructor(title) {
    this.title = toSentenceCase(title);
    this.tasks = [];
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  deleteTask(taskToBeDeleted) {
    const indexOftaskToBeDeleted = this.tasks.indexOf(taskToBeDeleted);
    this.tasks.splice(indexOftaskToBeDeleted, 1);
  }

  getTask(taskToBeFound) {
    const foundTask = this.tasks.find((task) => task.id === taskToBeFound.id);
    return foundTask;
  }

  getAllTasks() {
    if (this.tasks) {
      return this.tasks;
    }
  }

  getTasksForThisWeek() {
    // Get tasks that is due for this week
  }

  getTasksForToday() {
    // Get tasks that is due for today
  }

  getImportantTasks() {
    // get tasks that has priority is set true
  }
}
