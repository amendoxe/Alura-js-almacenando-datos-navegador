import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

//COMMENT add Task solamente se encarga de agregar a la lista de tareas
export const addTask = (evento) => {
	const list = document.querySelector("[data-list]");
	const task = createTask(evento);
	list.appendChild(task);
};
const createTask = (evento) => {
	evento.preventDefault();
	const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
	console.log(taskList);
	const input = document.querySelector("[data-form-input]");
	const calendar = document.querySelector("[data-form-date]");
	const value = input.value;
	const date = calendar.value;
	const dateFormat = moment(date).format("DD/MM/YYYY");
	console.log(dateFormat);
	// aqí estaba const list
	const task = document.createElement("li");
	task.classList.add("card");
	input.value = "";
	//backticks
	const taskContent = document.createElement("div");

	const taskObj = {
		value,
		dateFormat
	};
	taskList.push(taskObj);
	localStorage.setItem("tasks", JSON.stringify(taskList)); //Ambos parámetros deben estar en formato string para verlo en el Session Storage

	const titleTask = document.createElement("span");
	titleTask.classList.add("task");
	titleTask.innerText = value;
	taskContent.appendChild(checkComplete());
	taskContent.appendChild(titleTask);
	// task.innerHTML = content;

	const dateElement = document.createElement("span"); //COMMENT sólo estamos creando el espacio
	dateElement.innerHTML = dateFormat; //COMMENT pone adentro la fecha dateFormat, pero aún no hace un display en nuestra página

	task.appendChild(taskContent);
	//Para hacer el display↓
	task.appendChild(dateElement);
	task.appendChild(deleteIcon());
	//COMMENT aqui estaba 	list.appendChild(task);
	return task;
};
