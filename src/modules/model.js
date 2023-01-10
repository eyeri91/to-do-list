import Task from "./task.js";
import Project from "./project.js";
// import { toSentenceCase } from "../utils/utils.js";

const defaultTask = new Task("Finish TypeScript course", "", "Personal");
const defaultTask2 = new Task("sds", "", "Personal");
const defaultTaks3 = new Task("Buy cheese", "", "");
const defaultTaks4 = new Task("Supermarket", "", "");
const personalProject = new Project("Personal");
const allTasksProject = new Project("All tasks");
personalProject.addTask(defaultTask);
personalProject.addTask(defaultTask2);
allTasksProject.addTask(defaultTaks3);
allTasksProject.addTask(defaultTaks4);

export class Model {
  #projects;
  #publishNewTaskAddedEvent;

  #publishReleaseTasksForChosenCategoryEvent;
  constructor(
    publishNewTaskAddedEvent,

    publishReleaseTasksForChosenCategoryEvent
  ) {
    this.#projects = [];
    this.#projects.push(personalProject, allTasksProject);
    this.#publishNewTaskAddedEvent = publishNewTaskAddedEvent;

    this.#publishReleaseTasksForChosenCategoryEvent =
      publishReleaseTasksForChosenCategoryEvent;
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

  addTask(taskObject) {
    const newTask = new Task(
      taskObject.title,
      taskObject.dueDate,
      taskObject.projectCategory
    );

    for (const project of this.#projects) {
      if (project.title === newTask.projectCategory) project.addTask(newTask);
      else continue;
    }

    this.#publishNewTaskAddedEvent(this.collectTasksForChosenProjectName());
  }

  removeTask(task) {
    for (const project of this.#projects) {
      if (task.projectCategory === project.title) project.deleteTask(task);
      else alert("There is no project category found ");
    }
  }

  collectTasksForChosenProjectName(projectName) {
    if (!projectName) {
      const allTasksFromEveryProject = [];
      for (const project of this.#projects) {
        const allTasksFromAProject = project.getAllTasks();
        for (const task of allTasksFromAProject) {
          allTasksFromEveryProject.push(task);
        }
      }

      return allTasksFromEveryProject;
    } else {
      const allTasksFromChosenProejct = [];
      for (const project of this.#projects) {
        if (project.title === projectName) {
          const allTasksOfThisCategory = project.getAllTasks();
          for (const task of allTasksOfThisCategory) {
            allTasksFromChosenProejct.push(task);
          }
        }
      }
      this.#publishReleaseTasksForChosenCategoryEvent(
        allTasksFromChosenProejct
      );
    }
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
