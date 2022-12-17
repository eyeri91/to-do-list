// A class to create todo-tasks.

export default class Task {
  #title;
  #date;
  #project;
  #priority;
  #completion;

  constructor(title) {
    this.#title = title;
  }

  setTitle(newTitle) {
    this.#title = newTitle;
  }

  getTitle() {
    return this.#title;
  }

  setDueDate(dueDate) {
    return (this.#date = dueDate);
  }

  getDueDate() {
    return this.#date;
  }

  setForWhichProject(projectName) {
    return (this.#project = projectName);
  }

  getWhichProjectFor() {
    return this.#project;
  }

  setPriority(boolean) {
    return (this.#priority = boolean);
  }

  getPriority() {
    return this.#priority;
  }

  setCompletionStatus(answer) {
    return (this.#completion = answer);
  }

  getCompletionStatus() {
    return this.#completion;
  }
}

// const newTask = new Task("Bibimbab");

// newTask.setDueDate("today");

// console.log(newTask);
