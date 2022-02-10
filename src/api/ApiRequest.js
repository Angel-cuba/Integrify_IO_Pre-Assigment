export const allUsers = async () => await fetch('https://jsonplaceholder.typicode.com/users');

export const userById = async (id) =>
	await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
