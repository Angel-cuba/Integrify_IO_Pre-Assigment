import React, { useEffect, useState } from 'react';
import { allUsers } from '../api/ApiRequest';
import { useStyles } from '../styles';
import Card from './AllCards/Card';

const HomeScreen = () => {
	const [users, setUsers] = useState();
	console.log(users);
	const styles = useStyles();
	useEffect(() => {
		allUsers()
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	return (
		<div className={styles.text}>
			<h1>Hola desde el principal</h1>
			<Card users={users} />
		</div>
	);
};

export default HomeScreen;
