import React, { useState } from "react";

function InputForm({ todoList, setTodoList }) {
	const [input, setInput] = useState("");

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setTodoList([...todoList, input]);
		setInput("");
	};

	const onChangeHandler = (e) => {
		setInput(e.target.value);
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input
					type='text'
					name='input'
					id='input'
					value={input}
					onChange={onChangeHandler}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default InputForm;
