// A class to create todo-tasks.

class Task {
  constructor(name) {
    this.name = name;
  }

  set isDueUntil(dueDate) {
    return (this.date = dueDate);
  }

  set isForProject(projectName) {
    return (this.project = projectName);
  }

  set isImportant(priorityTag) {
    return (this.priority = priorityTag);
  }
}
