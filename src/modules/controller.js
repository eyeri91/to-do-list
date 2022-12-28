import { Model } from "./model.js";
import { View } from "./view.js";
import { EventManager } from "./eventManager.js";

export class Controller {
  #view;
  #model;
  #eventManager;
  constructor(taskContainer) {
    this.#eventManager = new EventManager();
    this.#eventManager.subscribe(
      "addProject",
      (data) => this.#view.addNewProject(data),
      (data) => this.#model.addNewProject(data)
    );

    this.#eventManager.subscribe(
      "removeProject",
      (data) => this.#view.removeProject(data),
      (data) => this.#model.removeProject(data)
    );

    this.#eventManager.subscribe(
      "addTask",
      (data) => this.#view.addTask(data),
      (data) => this.#model.addTask(data)
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
      (data) => this.#eventManager.publish("addTask", data),
      (data) => this.#eventManager.publish("removeTask", data),
      (data) => this.#eventManager.publish("selectTaskCategory", data)
    );
  }

  init() {
    this.#model = new Model((data) =>
      this.#eventManager.publish("releaseTasksForChosenCategory", data)
    );
    this.#view.renderStartPage();
  }
}

// loadTasksForChosenCategory() {}

// editTaskDetails() {}

// togglePriority() {}

// updateListByProjectCategory() {}
