// import * as bootstrap from "bootstrap";
import { createElement } from "../utils/utils.js";

const homeTaskMenuList = ["All tasks", "Today", "This week"];
let projectTitleList = ["Personal"];
export class View {
  #taskContainer;
  #publishAddProjectEvent;
  #publishRemoveProjectEvent;
  #publishAddTaskEvent;
  #publishRemoveTaskEvent;
  #publishSelectTaskCategory;
  projectTitleList;
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
    this.projectTitleList;
  }

  // Function to update taskListContainer with chose list
  // Function to add and remove project to the sideBar

  renderStartPage(allPreviousTasks) {
    if (!allPreviousTasks) this.renderEmptyListPage();
    this.#renderTaskList(projectTitleList);
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

  #renderTaskList(projectTitleList) {
    this.projectTitleList = projectTitleList;
    // Dropdown menu container
    const dropdownContainer = createElement("div");
    dropdownContainer.classList.add("btn-group", "align-self-start", "w-25");
    this.#taskContainer.append(dropdownContainer);
    // Dropdown button
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

    // Dropdown menu list
    this.#MakeDropdownListItemsAndAppend(homeTaskMenuList, dropdownMenuList);
    this.#MakeDropdownListItemsAndAppend(
      this.projectTitleList,
      dropdownMenuList
    );

    // Make list Group
    const listGroupContainer = createElement("div");
    this.#taskContainer.append(listGroupContainer);

    // this.#makeTaskListAndAppend(tasks, listGroupContainer);
  }

  #MakeDropdownListItemsAndAppend(list, parentElement) {
    for (const item of list) {
      const li = createElement("li");
      if (list === projectTitleList) {
        li.classList.add(item.toLowerCase());
      }
      const a = createElement("a", item);
      a.classList.add("dropdown-item");
      a.setAttribute("href", "#");
      li.append(a);
      parentElement.append(li);
    }
    if (list === homeTaskMenuList) {
      const li = createElement("li");
      const hr = createElement("hr");
      hr.classList.add("dropdown-divider");
      li.append(hr);
      parentElement.append(li);
    }

    // It should update new and removed project name too.
  }

  #makeTaskListAndAppend(tasks, parentElement) {
    // List group container
    // Mak
  }

  renderProjectList() {}

  renderEmptyListPage() {
    if (this.#taskContainer.hasChildNodes())
      this.#taskContainer.replaceChildren();
    // Open the new task modal automatically
    // OpenNewTaskModal();
  }

  addNewProject(newProject) {
    this.#publishAddProjectEvent(newProject.title);
    this.projectTitleList.push(newProject.title);

    // a function to update a project title list array in view.
  }

  removeProject(projectToBeRemoved) {
    this.#publishRemoveProjectEvent(projectToBeRemoved.title);
    this.projectTitleList = this.projectTitleList.filter(
      (project) => project.title !== projectToBeRemoved.title
    );
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
