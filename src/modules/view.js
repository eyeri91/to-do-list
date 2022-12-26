// import * as bootstrap from "bootstrap";
import { createElement } from "../utils/utils.js";
export class View {
  #taskContainer;
  constructor(taskContainer) {
    this.#taskContainer = taskContainer;
  }

  // Function to update taskListContainer with chose list
  // Function to add and remove project to the sideBar

  renderStartPage() {
    // const buttonToAddNewTask = createElement("button", "+");
    // this.#taskContainer.append(buttonToAddNewTask);
  }

  renderProjectList() {}

  addNewProject() {}

  removeProject() {}

  addTask() {}

  removeTask() {
    //
  }

  editTaskDetails() {}

  togglePriority() {}

  updateProjectCategory() {}

  // When screen is less than medium and the burger icon is collpased,
  // Then add those 2 buttons for Home and Projects
}
