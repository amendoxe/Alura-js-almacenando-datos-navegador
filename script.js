import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

//add Task sólamente se encarga de agregar a la lista de tareas
const addTask = (evento) => {
	const list = document.querySelector("[data-list]");
	const task = createTask(evento);
	list.appendChild(task);
};

const createTask = (evento) => {
	evento.preventDefault();
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

	const titleTask = document.createElement("span");
	titleTask.classList.add("task");
	titleTask.innerText = value;
	taskContent.appendChild(checkComplete());
	taskContent.appendChild(titleTask);
	// task.innerHTML = content;

	const dateElement = document.createElement("span"); //sólo estamos creando el espacio
	dateElement.innerHTML = dateFormat; //pone adentro la fecha dateFormat, pero aún no hace un display en nuestra página

	task.appendChild(taskContent);
	//Para hacer el display↓
	task.appendChild(dateElement);
	task.appendChild(deleteIcon());
	//aqui estaba 	list.appendChild(task);
	return task;
};

//Arrow functions o funciones anonimas
btn.addEventListener("click", addTask);
