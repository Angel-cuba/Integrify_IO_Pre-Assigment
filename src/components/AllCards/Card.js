import { Link } from 'react-router-dom';
import { useStyles } from './stylesCard';

const Card = ({ users }) => {
	const styles = useStyles();

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
								<h2>{user.name.slice(0, 16)}...</h2>
								<small style={{ color: 'silver', fontStyle: 'italic', fontWeight: 'bolder' }}>
									@{user.username}
								</small>
								<Link className={styles.link} to="#">
									http://{user.website}
								</Link>
							</div>
							<Link className={styles.button} to={`/${user.id}`}>
								Details
							</Link>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Card;
