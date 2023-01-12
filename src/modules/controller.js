import { Model } from "./model.js";
import { View } from "./view.js";
import { EventManager } from "./eventManager.js";

export class Controller {
  #view;
  #model;
  #eventManager;
  constructor(taskContainer) {
    this.#eventManager = new EventManager();

    this.#eventManager.subscribe("returnAllTasks", (data) =>
      this.#view.renderStartPage(data)
    );
    this.#eventManager.subscribe("addProject", (data) =>
      this.#model.addNewProject(data)
    );

    this.#eventManager.subscribe("newProjectAdded", (data) =>
      this.#view.createNewProjectElement(data)
    );

    this.#eventManager.subscribe("removeProject", (data) =>
      this.#model.removeProject(data)
    );

    this.#eventManager.subscribe("newTask", (data) => {
      this.#model.addTask(data);
    });

    this.#eventManager.subscribe(
      "newTaskAdded",
      (data) => this.#view.loadRelatedProjectsTasks(data)
      // console.log(data)
    );

    this.#eventManager.subscribe(
      "removeTask",
      (data) => this.#view.removeTask(data),
      (data) => this.#model.removeTask(data)
    );

    this.#eventManager.subscribe("selectTaskCategory", (data) =>
      this.#model.collectTasksForChosenCategory(data)
    );

    this.#eventManager.subscribe("releaseTasksForChosenCategory", (data) =>
      this.#view.loadTasksForChosenCategory(data)
    );

    this.#view = new View(
      taskContainer,
      (data) => this.#eventManager.publish("addProject", data),
      (data) => this.#eventManager.publish("removeProject", data),
      (data) => this.#eventManager.publish("newTask", data),
      (data) => this.#eventManager.publish("removeTask", data),
      (data) => this.#eventManager.publish("selectTaskCategory", data)
    );
  }

  init() {
    this.#model = new Model(
      (data) => this.#eventManager.publish("newTaskAdded", data),
      (data) => this.#eventManager.publish("newProjectAdded", data),
      (data) =>
        this.#eventManager.publish("releaseTasksForChosenCategory", data)
    );
    const allTasks = this.#model.collectTasksForChosenProjectName();
    this.#eventManager.publish("returnAllTasks", allTasks);
  }
}

// loadTasksForChosenCategory() {}

// editTaskDetails() {}

// togglePriority() {}

// updateListByProjectCategory() {}
