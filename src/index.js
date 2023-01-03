import { Controller } from "./modules/controller.js";

const taskContainer = document.getElementById("task-container");

const controller = new Controller(taskContainer);

controller.init();
