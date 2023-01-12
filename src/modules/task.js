import { toSentenceCase } from "../utils/utils.js";

// A class to create todo-tasks.

export default class Task {
  constructor(title, dueDate, projectCategory = "All tasks") {
    this.title = toSentenceCase(title);
    this.dueDate = dueDate;
    this.projectCategory = toSentenceCase(projectCategory);
    (this.isImportant = false), (this.isCompleted = false);
  }
}
