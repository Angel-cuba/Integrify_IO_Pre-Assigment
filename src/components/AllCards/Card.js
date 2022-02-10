import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userById } from '../../api/ApiRequest';
import Details from '../CardDetails/Details';
import { useStyles } from './stylesCard';

const Card = ({ users }) => {
	const [userId, setUserId] = useState();
	const [userInfo, setUserInfo] = useState(false);
	const styles = useStyles();
	const fetchById = (id) => {
		setUserInfo(true);
		userById(id)
			.then((res) => res.json())
			.then((data) => setUserId(data));
	};
	return (
		<>
			{!users ? (
				<h1>Loading....</h1>
			) : (
				<div className={styles.container}>
					{users.map((user) => (
						<div key={user.id} className={styles.card}>
							<div className={styles.content}>
								<h1 className={styles.firstLetter}>{user.name[0]}</h1>
								<h2>{user.name}</h2>
								<p style={{ color: 'silver', fontStyle: 'italic', fontWeight: 'bolder' }}>
									@{user.username}
								</p>
								<Link className={styles.link} to={user.website}>
									http://{user.website}
								</Link>
							</div>

							<button onClick={() => fetchById(user.id)} className={styles.button}>
								clclc
							</button>
						</div>
					))}
					{userInfo && <Details userId={userId} setUserInfo={setUserInfo} />}
				</div>
			)}
		</>
	);
};

export default Card;
