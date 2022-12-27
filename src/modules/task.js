import { toSentenceCase } from "../utils/utils.js";

// A class to create todo-tasks.

export default class Task {
  constructor(title, dueDate, projectCategory = "Personal") {
    this.title = toSentenceCase(title);
    this.dueDate = dueDate;
    this.projectCategory = projectCategory;
    (this.isImportant = false), (this.isCompleted = false);
  }
}
