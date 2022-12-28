// import * as bootstrap from "bootstrap";
import { createElement } from "../utils/utils.js";
export class View {
  #taskContainer;
  #publishAddProjectEvent;
  #publishRemoveProjectEvent;
  #publishAddTaskEvent;
  #publishRemoveTaskEvent;
  #publishSelectTaskCategory;
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

  renderStartPage() {
    // if(list) this.renderEmptyList()
    // const buttonToAddNewTask = createElement("button", "+");
    // this.#taskContainer.append(buttonToAddNewTask);
  }

  renderProjectList() {}

  renderEmptyList() {
    // If no tasks are promised, The list is empty!
  }

  addNewProject() {
    this.#publishAddProjectEvent(newProjectTitle);
  }

  removeProject() {
    this.#publishRemoveProjectEvent(projectTitle);
  }

  addTask() {
    this.#publishAddTaskEvent(newTask);
  }

  removeTask() {
    this.#publishRemoveTaskEvent(taskToBeRemoved);
  }

  loadTasksForChosenCategory() {}

  editTaskDetails() {}

  togglePriority() {}

  updateListByProjectCategory() {}

  // When screen is less than medium and the burger icon is collpased,
  // Then add those 2 buttons for Home and Projects
}
