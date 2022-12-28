import Task from "./task.js";
import Project from "./project.js";
import { toSentenceCase } from "../utils/utils.js";

// const defaultTask = new Task("study JS hard", "no date", "Personal");
const personalProject = new Project("Personal");

export class Model {
  #projects;
  #publishReleaseTasksForChosenCategory;
  constructor(publishReleaseTasksForChosenCategory) {
    this.#projects = [];
    this.#projects.push(personalProject);
    this.#publishReleaseTasksForChosenCategory =
      publishReleaseTasksForChosenCategory;
  }
  // create default projects and add it to projectList
  addNewProject(projectTitle) {
    if (!this.#projects[projectTitle]) {
      const newProject = new Project(projectTitle);
      this.#projects.push(newProject);
    } else alert("There is a project with the same name!");
  }

  removeProject(projectTitle) {
    this.#projects = this.#projects.filter(
      (project) => project.title !== projectTitle
    );
  }

  addTask(task) {
    for (const project of this.#projects) {
      if (project.title === task.projectCategory) project.addTask(task);
      else {
        alert("There is no project category found");
      }
    }
  }

  removeTask(task) {
    for (const project of this.#projects) {
      if (task.projectCategory === project.title) project.deleteTask(task);
      else alert("There is no project category found ");
    }
  }

  collectTasksForChosenCategory() {
    this.#publishReleaseTasksForChosenCategory(data);
  }

  // print() {
  //   console.log(this.#projects);
  //   console.log(this.#projects[0].tasks);
  // }
}

// A function to save tasks to localStorage

const returnTasks =
  (...locationToCheck) =>
  (conditionsToCheck) => {
    // return tasks that meets conditions to check
  };

// const returnTodayTask = returnTasks(personal);
// const todayTaskFromPersonal = returnTodayTask(date);

// const myModel = new Model("n");

// myModel.addTask(defaultTask);
// myModel.print();
// personalProject is undefined as it is not targeting the correct instance of a project.
