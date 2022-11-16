import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const readTasks = () => {
	const list = document.querySelector("[data-list]");
	console.log(list);

	const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
	const dates = uniqueDates(taskList);
	console.log(dates);

	dates.forEach((date) => {
		console.log(date);
	});

	taskList.forEach((task) => {
		list.appendChild(dateElement(task.dateFormat));
		list.appendChild(createTask(task));
	});
};
