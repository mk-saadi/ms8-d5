const add = (first, second) => {
	return first + second;
};

const multiply = (first, second) => {
	return first * second;
};

/* --------------------------------- reduce --------------------------------- */
// const numbers = [12, 65, 954, 16, 841, 32];
// const sumReduce = (previous, current) => previous + current;
// const total = numbers.reduce(sumReduce, 0);

// const items = [
// 	{
// 		id: "641f47e884876c8e26d1f256",
// 		index: 0,
// 		price: 3745.0,
// 		name: "Katy Mcdowell",
// 	},
// 	{
// 		id: "641f47e87a67f1eda7f30d6c",
// 		index: 1,
// 		price: 2017.23,
// 		name: "Jarvis Rush",
// 	},
// 	{
// 		id: "641f47e8e0511ade48b1dbf0",
// 		index: 2,
// 		price: 1914.86,
// 		name: "Shelia Manning",
// 	},
// 	{
// 		id: "641f47e8f4e80be51a43e28e",
// 		index: 3,
// 		price: 1540.98,
// 		name: "Loretta Nixon",
// 	},
// 	{
// 		id: "641f47e8ee2141de0c1e2b0c",
// 		index: 4,
// 		price: 1558.67,
// 		name: "Harris Oliver",
// 	},
// 	{
// 		id: "641f47e8174edaf43e226685",
// 		index: 5,
// 		price: 2289.03,
// 		name: "Samantha Lopez",
// 	},
// 	{
// 		id: "641f47e897173bffb5d08391",
// 		index: 6,
// 		price: 2425.61,
// 		name: "Aline Joyner",
// 	},
// 	{
// 		id: "641f47e8d9cf11d05b17a3a5",
// 		index: 7,
// 		price: 2217.32,
// 		name: "Goldie Walsh",
// 	},
// 	{
// 		id: "641f47e828e8626192643388",
// 		index: 8,
// 		price: 1331.76,
// 		name: "Nettie Dodson",
// 	},
// 	{
// 		id: "641f47e8997c25ffb3a348eb",
// 		index: 9,
// 		price: 3922.17,
// 		name: "Stokes Holt",
// 	},
// 	{
// 		id: "641f47e87947b5cdec58f8ac",
// 		index: 10,
// 		price: 3127.37,
// 		name: "Lamb Sosa",
// 	},
// 	{
// 		id: "641f47e815d828b11dd01b59",
// 		index: 11,
// 		price: 1939.15,
// 		name: "Richard Acevedo",
// 	},
// 	{
// 		id: "641f47e8941cff0f31b23c16",
// 		index: 12,
// 		price: 2305.53,
// 		name: "Lelia Bond",
// 	},
// 	{
// 		id: "641f47e80d25683acd0c5aa3",
// 		index: 13,
// 		price: 1500.38,
// 		name: "Pansy Rivas",
// 	},
// 	{
// 		id: "641f47e8a169a398771ddcfb",
// 		index: 14,
// 		price: 2901.27,
// 		name: "Buck Mann",
// 	},
// 	{
// 		id: "641f47e88caa8a0c5e262eb1",
// 		index: 15,
// 		price: 3749.16,
// 		name: "Connie Petty",
// 	},
// 	{
// 		id: "641f47e8a15cc596dc9e828b",
// 		index: 16,
// 		price: 3070.46,
// 		name: "Claire Pratt",
// 	},
// 	{
// 		id: "641f47e80b0916ff71ecf2df",
// 		index: 17,
// 		price: 1126.59,
// 		name: "Wolf Burch",
// 	},
// 	{
// 		id: "641f47e8013aada98f6c62ff",
// 		index: 18,
// 		price: 3021.34,
// 		name: "Juliana Bryan",
// 	},
// 	{
// 		id: "641f47e80162ca24b56bd525",
// 		index: 19,
// 		price: 2547.02,
// 		name: "Constance Jacobson",
// 	},
// 	{
// 		id: "641f47e8cbb036fea06b1230",
// 		index: 20,
// 		price: 2908.02,
// 		name: "Lynette Crane",
// 	},
// 	{
// 		id: "641f47e8324eb2bf1738af11",
// 		index: 21,
// 		price: 2576.42,
// 		name: "Terry Delaney",
// 	},
// 	{
// 		id: "641f47e89edf7b232a51e20f",
// 		index: 22,
// 		price: 1659.86,
// 		name: "Knowles Espinoza",
// 	},
// ];
// const itemSumReducer = (previous, current) => previous + current.price;
// const itemSum = items.reduce(itemSumReducer, 0);
// console.log(itemSum.toFixed(2));

const getTotalPrice = (products) => {
	const reducer = (previous, current) => previous + current.price;
	const total = products.reduce(reducer, 0);
	return total.toFixed(2);
};

//# ------------------------------- to export ------------------------------- */
// export default add
export { add, multiply, getTotalPrice as getTotal };
