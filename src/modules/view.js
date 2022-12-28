// import * as bootstrap from "bootstrap";
import { createElement } from "../utils/utils.js";

let projectTitleList = [];
export class View {
  #taskContainer;
  #publishAddProjectEvent;
  #publishRemoveProjectEvent;
  #publishAddTaskEvent;
  #publishRemoveTaskEvent;
  #publishSelectTaskCategory;
  #projectTitleList;
  constructor(
    taskContainer,
    publishAddProjectEvent,
    publishRemoveProjectEvent,
    publishAddTaskEvent,
    publishRemoveTaskEvent,
    publishSelectTaskCategory
  ) {
    this.#taskContainer = taskContainer;
    this.#publishAddProjectEvent = publishAddProjectEvent;
    this.#publishRemoveProjectEvent = publishRemoveProjectEvent;
    this.#publishAddTaskEvent = publishAddTaskEvent;
    this.#publishRemoveTaskEvent = publishRemoveTaskEvent;
    this.#publishSelectTaskCategory = publishSelectTaskCategory;
  }

  // Function to update taskListContainer with chose list
  // Function to add and remove project to the sideBar

  renderStartPage(allPreviousTasks) {
    if (!allPreviousTasks) this.renderEmptyListPage();
    this.renderTaskList();
    // allPreviousTasks itself is an array containing eacy project array
    // To access each project use [] index
    // To access task of each project, use [][] index
  }

  loadTasksForChosenCategory() {
    // Add list part of html element and classes
    // Add rules...
    // 1. every 2nd item has gray bg
    // 2. Importatn item has yellow bg
    // 3.
  }

  renderTaskList(projectsTitleList) {
    const dropdownContainer = createElement("div");
    const dropdownButton = createElement("button", "All tasks");
    dropdownContainer.append(dropdownButton);
    dropdownButton.type = "button";
    dropdownButton.classList.add(
      "btn",
      "bthn-md",
      "dropdown-toggle",
      "border-0"
    );
    dropdownButton.setAttribute("aria-expanded", false);
    dropdownButton.setAttribute("data-bs-toggle", "dropdown");
    const dropdownMenuList = createElement("ul");
    dropdownContainer.append(dropdownMenuList);
    dropdownMenuList.classList.add("dropdown-menu");

    // I should have a project name list array for view and model so that when a new project is added
    // It updates the navbar.
  }

  renderProjectList() {}

  renderEmptyListPage() {
    if (this.#taskContainer.hasChildNodes())
      this.#taskContainer.replaceChildren();
    // Open the new task modal automatically
    // OpenNewTaskModal();
  }

  addNewProject() {
    this.#publishAddProjectEvent(newProjectTitle);
    // a function to update a project title list array in view.
  }

  removeProject() {
    this.#publishRemoveProjectEvent(projectTitle);
    // a function to update a project title list array in view.
  }

  addTask() {
    this.#publishAddTaskEvent(newTask);
  }

  removeTask() {
    this.#publishRemoveTaskEvent(taskToBeRemoved);
  }

  editTaskDetails() {}

  togglePriority() {}

  updateListByProjectCategory() {}

  // When screen is less than medium and the burger icon is collpased,
  // Then add those 2 buttons for Home and Projects
}
