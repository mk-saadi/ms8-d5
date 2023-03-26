import React, { useEffect, useState } from "react";
import { getTotal } from "../../utilities/calculatae";
import { addToDB, removeFromDB, deleteFromDB } from "../../utilities/fakedb";

const Cosmetics = () => {
	const [cosmetics, setCosmetics] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setCosmetics(data));
	}, []);

	const total = getTotal(cosmetics);

	return (
		<div>
			<h1>Welcome to Aria Cosmetics</h1>
			<h3>Required ${total}</h3>
			<hr />
			{cosmetics.map((cosmetic) => (
				<Cosmetic
					cosmetic={cosmetic}
					key={cosmetic.id}
					// name={cosmetic.name}
					// id={cosmetic.id}
					// price={cosmetic.price}
				></Cosmetic>
			))}
		</div>
	);
};

const cosmetika = {
	backgroundColor: "gray",
	margin: "0px 100px",
	marginTop: "20px",
	padding: "2px 20px",
};
const btn = {
	color: "white",
	backgroundColor: "gray",
	fontSize: "1.5rem",
	margin: "5px",
	cursor: "pointer",
	// color: "white",
	// backgroundColor: "white",
};

function Cosmetic(props) {
	/* ----------------- {object} because cosmetics is an object ---------------- */
	/* ------------------------------- destructure ------------------------------ */
	const { name, id, price, index } = props.cosmetic;

	const addToCart = (id) => {
		// localStorage.setItem(id, 1);
		addToDB(id);
	};
	// const addToCartWithParameters = () => addToCart(id);

	const removeFromCart = (id) => {
		removeFromDB(id);
	};
	const deleteFromCart = () => {
		deleteFromDB();
	};

	return (
		<div style={cosmetika}>
			<h2>Index: {index}</h2>
			{/* <h3>ID: {id}</h3> */}
			<h3>Name: {name}</h3>
			<h3>Price: ${price}</h3>
			{/* <button
				style={btn}
				onClick={addToCartWithParameters}>
				Add to cart
			</button> */}
			<button
				style={btn}
				onClick={() => addToCart(id)}>
				Add to cart
			</button>
			<button
				onClick={() => removeFromCart(id)}
				style={btn}>
				Remove
			</button>
			<button
				onClick={() => deleteFromCart()}
				style={btn}>
				Delete All
			</button>
			<hr />
		</div>
	);
}

export default Cosmetics;
