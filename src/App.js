import { useState } from "react";
import "./App.css";

import InputForm from "./components/inputForm/inputForm.component";
import List from "./components/list/list.component";

function App() {
	const [todoList, setTodoList] = useState([]);

	return (
		<div>
			<h1>Todo App</h1>
			<InputForm todoList={todoList} setTodoList={setTodoList} />
			<List todoList={todoList} />
		</div>
	);
}

export default App;

