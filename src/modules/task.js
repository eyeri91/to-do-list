import { toSentenceCase } from "../utils/utils.js";
import { v4 as uuidv4 } from "uuid";

// A class to create todo-tasks.

export default class Task {
  constructor(title, dueDate, projectCategory = "All tasks") {
    this.id = uuidv4();
    this.title = toSentenceCase(title);
    this.dueDate = dueDate;
    this.projectCategory = toSentenceCase(projectCategory);
    this.isImportant = false;
  }
}
