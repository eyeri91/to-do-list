import { View } from "./modules/view.js";

const taskContainer = document.getElementById("task-container");

const view = new View(taskContainer);

view.renderStartPage();
