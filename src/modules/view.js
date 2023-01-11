// import * as bootstrap from "bootstrap";
import { toSentenceCase } from "../utils/utils.js";
import { createElement } from "../utils/utils.js";

const homeTaskMenuList = ["All tasks", "Today", "This week"];
let projectTitleList = ["Personal"];

const taskStatus = {
  oddNumberedTask: "list-group-item",
  evenNumberedTask: "list-group-item-dark",
  important: "list-group-item-warning",
  completed: "list-group-item-light",
};
export class View {
  #taskContainer;
  #publishAddProjectEvent;
  #publishRemoveProjectEvent;
  #publishNewTaskEvent;
  #publishRemoveTaskEvent;
  #publishSelectTaskCategory;
  projectTitleList;
  constructor(
    taskContainer,
    publishAddProjectEvent,
    publishRemoveProjectEvent,
    publishNewTaskEvent,
    publishRemoveTaskEvent,
    publishSelectTaskCategory
  ) {
    this.#taskContainer = taskContainer;
    this.projectTitleList = projectTitleList;
    this.#publishAddProjectEvent = publishAddProjectEvent;
    this.#publishRemoveProjectEvent = publishRemoveProjectEvent;
    this.#publishNewTaskEvent = publishNewTaskEvent;
    this.#publishRemoveTaskEvent = publishRemoveTaskEvent;
    this.#publishSelectTaskCategory = publishSelectTaskCategory;
    this.projectTitleList;
  }

  #hideAddTaskAndProjectButtonWhenNavbarIsNotExpanded(
    navbarTogglerButton,
    addTaskButton,
    addProjectButton
  ) {
    const isExpanded = navbarTogglerButton.getAttribute("aria-expanded");
    if (isExpanded === "true") {
      addTaskButton.classList.remove("d-none");
      addProjectButton.classList.remove("d-none");
    } else if (isExpanded === "false") {
      addTaskButton.classList.add("d-none");
      addProjectButton.classList.add("d-none");
    }
  }
  // Function to update taskListContainer with chose list
  // Function to add and remove project to the sideBar

  renderStartPage(allPreviousTasks) {
    if (!allPreviousTasks) this.renderEmptyListPage();
    const listHeader = createElement("h2", "All tasks");
    listHeader.id = "list-header";
    this.#taskContainer.append(listHeader);
    const listGroupContainer = createElement("div");
    listGroupContainer.id = "list-group-container";
    listGroupContainer.classList.add("list-group", "list-group-flush", "w-75");
    this.#taskContainer.append(listGroupContainer);
    this.loadRelatedProjectsTasks(allPreviousTasks);

    // allPreviousTasks itself is an array containing eacy project array
    // To access each project use [] index
    // To access task of each project, use [][] index

    const addTaskButton = document.getElementById("add-task-button");
    const addProjectButton = document.getElementById("add-project-button");
    const navbarTogglerButton = document.getElementById("navbar-toggler");

    navbarTogglerButton.addEventListener("click", () => {
      this.#hideAddTaskAndProjectButtonWhenNavbarIsNotExpanded(
        navbarTogglerButton,
        addTaskButton,
        addProjectButton
      );
    });

    const addTaskModal = new bootstrap.Modal("#add-task-modal");
    const saveNewTaskButton = document.getElementById("save-task-button");
    saveNewTaskButton.addEventListener("click", () => {
      const newTask = this.addTask();
      if (newTask) {
        this.#publishNewTaskEvent(newTask);
        addTaskModal.hide();
      }
    });

    const addProjectModal = new bootstrap.Modal("#add-project-modal");
    const saveNewProjectButton = document.getElementById("save-project-button");
    saveNewProjectButton.addEventListener("click", () => {
      const newProject = this.addNewProject();
      if (newProject) {
        this.#publishAddProjectEvent(newProject);
        addProjectModal.hide();
      }
    });
  }

  #checkIfInputIsEmpty(...values) {
    for (const value of values) {
      if (value === "") alert("Oops! You missed something");
      else return true;
    }
  }

  loadRelatedProjectsTasks(collectedTasks) {
    // This needs to be refactord or fixed for loading all tasks in start page and loading certain projects"
    // Now the data structure is different when it's loading for the first time and
    //  when reloading after a new task is added
    const listGroupContainer = document.getElementById("list-group-container");
    if (listGroupContainer.hasChildNodes())
      listGroupContainer.replaceChildren();
    const numberOfTasks = collectedTasks.length;
    for (let i = 0; i < numberOfTasks; i++) {
      const task = collectedTasks[i];
      const indexOfTask = i;
      // Need a method to change the color of list depending on listnumber
      const taskItem = this.#addTaskItemsToListGroupContainer(
        task,
        indexOfTask
      );
      listGroupContainer.append(taskItem);
    }
  }

  #addTaskItemsToListGroupContainer(task, indexOfTask) {
    const aElement = createElement("a");
    aElement.setAttribute("href", "#");
    aElement.classList.add("list-group-item", "list-group-item-action");

    indexOfTask % 2 !== 0
      ? aElement.classList.add(taskStatus.evenNumberedTask)
      : aElement.classList.add(taskStatus.oddNumberedTask);

    // this.toggleImportantTask();

    const formInput = createElement("input");
    formInput.classList.add("form-check-input", "me-1");
    formInput.type = "checkbox";
    formInput.value = "";
    formInput.id = "checkboxStretched";
    aElement.append(formInput);

    const formLabel = createElement("label", task.title);
    formLabel.classList.add("form-check-label", "stretched-link");
    formLabel.htmlFor = "checkboxStretched";
    aElement.append(formLabel);

    return aElement;
  }

  toggleImportantTask() {
    //  change the color of task list item when its status changes
  }

  renderEmptyListPage() {
    if (this.#taskContainer.hasChildNodes())
      this.#taskContainer.replaceChildren();
    // Open the new task modal automatically
    // OpenNewTaskModal();
  }

  addTask() {
    const chosenProjectName = document.getElementById("project-for-new-task");
    const newTaskTitle = document.getElementById("new-task-title");
    const newTaskDue = document.getElementById("task-due");
    const isNewTaskImportant = document.getElementById("task-priority-status");

    const taskObject = {
      title: newTaskTitle.value,
      dueDate: newTaskDue.value,
      projectCategory: chosenProjectName.value,
      isImportant: isNewTaskImportant.checked,
    };

    if (this.#checkIfInputIsEmpty(newTaskTitle.value)) {
      return taskObject;
    } else return false;
  }

  removeTask() {
    this.#publishRemoveTaskEvent(taskToBeRemoved);
  }

  addNewProject() {
    const newProjectTitle = document.getElementById("new-project-title");
    const newProjectObject = {
      title: toSentenceCase(newProjectTitle.value),
    };

    if (this.#checkIfInputIsEmpty(newProjectTitle.value)) {
      this.projectTitleList.push(newProjectObject.title);
      return newProjectObject;
    } else return false;
    // a function to update a project title list array in view.
  }

  createNewProjectElement(projectTitle) {
    const projectListContainer = document.getElementById(
      "project-list-container"
    );

    const projectItemContainer = createElement("div");
    projectItemContainer.classList.add(
      "project-item-div",
      "d-flex",
      "align-items-center",
      "justify-content-between"
    );

    const newProjectItem = createElement("a", projectTitle);
    newProjectItem.classList.add("nav-link");
    newProjectItem.setAttribute("href", "#");
    projectItemContainer.append(newProjectItem);

    const removeProjectButton = createElement("button", "-");
    removeProjectButton.setAttribute("type", "button");
    removeProjectButton.classList.add(
      "btn",
      "btn-lg",
      "text-danger",
      "remove-project-btn"
    );
    console.log(removeProjectButton);
    projectItemContainer.append(removeProjectButton);

    projectListContainer.append(projectItemContainer);
  }

  removeProject(projectToBeRemoved) {
    this.#publishRemoveProjectEvent(projectToBeRemoved.title);
    this.projectTitleList = this.projectTitleList.filter(
      (project) => project.title !== projectToBeRemoved.title
    );
    // a function to update a project title list array in view.
  }

  editTaskDetails() {}

  updateListByProjectCategory() {}

  // When screen is less than medium and the burger icon is collpased,
  // Then add those 2 buttons for Home and Projects
}

// #createDropDownMenu(projectTitleList) {
//   this.projectTitleList = projectTitleList;
//   // Dropdown menu container
//   const dropdownContainer = createElement("div");
//   dropdownContainer.classList.add("btn-group", "align-self-start", "w-25");
//   this.#taskContainer.append(dropdownContainer);
//   // Dropdown button
//   const dropdownButton = createElement("button", "All tasks");
//   dropdownContainer.append(dropdownButton);
//   dropdownButton.type = "button";
//   dropdownButton.classList.add(
//     "btn",
//     "bthn-md",
//     "dropdown-toggle",
//     "border-0"
//   );
//   dropdownButton.setAttribute("aria-expanded", false);
//   dropdownButton.setAttribute("data-bs-toggle", "dropdown");
//   const dropdownMenuList = createElement("ul");
//   dropdownContainer.append(dropdownMenuList);
//   dropdownMenuList.classList.add("dropdown-menu");

//   // Dropdown menu list
//   this.#MakeDropdownListItemsAndAppend(homeTaskMenuList, dropdownMenuList);
//   this.#MakeDropdownListItemsAndAppend(
//     this.projectTitleList,
//     dropdownMenuList
//   );
// }

// #MakeDropdownListItemsAndAppend(list, parentElement) {
//   for (const item of list) {
//     const li = createElement("li");
//     if (list === projectTitleList) {
//       li.classList.add(item.toLowerCase());
//     }
//     const a = createElement("a", item);
//     a.classList.add("dropdown-item");
//     a.setAttribute("href", "#");
//     li.append(a);
//     parentElement.append(li);
//   }
//   if (list === homeTaskMenuList) {
//     const li = createElement("li");
//     const hr = createElement("hr");
//     hr.classList.add("dropdown-divider");
//     li.append(hr);
//     parentElement.append(li);
//   }
// }
