import { toSentenceCase } from "../utils/utils.js";
export default class Project {
  #tasks;
  constructor(title) {
    this.title = toSentenceCase(title);
    this.#tasks = [];
  }

  addTask(newTask) {
    this.#tasks.push(newTask);
  }

  deleteTask(taskToBeDeleted) {
    this.#tasks = this.#tasks.filter(
      (task) => task.title !== taskToBeDeleted.title
    );
  }

  getTask(taskToBeFound) {
    const foundTask = this.#tasks.find(
      (task) => task.title === taskToBeFound.title
    );
  }

  getAllTasks() {
    if (this.#tasks) {
      return this.#tasks;
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
