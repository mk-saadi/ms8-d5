import React from "react";
import { add, multiply } from "../../utilities/calculatae";
// import add from "../../utilities/calculatae";

const Shoes = () => {
	const first = 95;
	const second = 32;
	const total = add(first, second);
	const total1 = multiply(first, second);
	return (
		<div>
			<h2>Shoe Component</h2>
			<p>total: {total}</p>
			<p>Output: {total1}</p>
		</div>
	);
};

export default Shoes;
