import React from "react";

function List({ todoList }) {
	return (
		<div>
			<ul>
				{todoList.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default List;
