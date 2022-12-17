// A class to create todo-tasks.

export default class Task {
  constructor(title, dueDate, projectCategory) {
    this.title = title;
    this.dueDate = dueDate;
    this.projectCategory = projectCategory;
    (this.priority = false), (this.completionStatus = false);
  }
}
