// A class to create todo-tasks.

class Task {
  date;
  project;
  priority;
  completion;

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

  set isCompleted(answer) {
    return (this.completion = answer);
  }
}
