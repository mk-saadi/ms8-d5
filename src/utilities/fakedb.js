// use localStorage to manage data
/* ---------------- watch module 49-5-6 for more information ---------------- */

const addToDB = (id) => {
	let shoppingCart = {};

	/* -------------------------- get the shopping cart ------------------------- */
	const storedCart = localStorage.getItem("shopping-cart");
	if (storedCart) {
		shoppingCart = JSON.parse(storedCart);
	}
	// else {
	// 	shoppingCart = {};
	// }

	/* ------------------------------ add quantity ------------------------------ */
	const quantity = shoppingCart[id];
	// const quantity = localStorage.getItem(id);
	if (quantity) {
		const newQuantity = quantity + 1;
		shoppingCart[id] = newQuantity;
		// const newQuantity = parseInt(quantity) + 1;
		// localStorage.setItem(id, newQuantity);
	} else {
		shoppingCart[id] = 1;
		// localStorage.setItem(id, 1);
	}
	localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

/* ------------------------------ remove from DB ------------------------------ */
const removeFromDB = (id) => {
	const storedCart = localStorage.getItem("shopping-cart");
	if (storedCart) {
		const shoppingCart = JSON.parse(storedCart);
		if (id in shoppingCart) {
			delete shoppingCart[id];
			localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
		}
	}
};

/* -------------------------- delete shopping cart -------------------------- */
const deleteFromDB = () => {
	localStorage.removeItem("shopping-cart");
};

export { addToDB, removeFromDB, deleteFromDB };
