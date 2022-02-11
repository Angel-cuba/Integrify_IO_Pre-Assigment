import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userById } from '../../api/ApiRequest';
import { useStyles } from './styles';
const Details = () => {
	const [userId, setUserId] = useState();
	const styles = useStyles();
	const { id } = useParams();
	useEffect(() => {
		fetchById(id);
	}, [id]);

	const fetchById = (id) => {
		userById(id)
			.then((res) => res.json())
			.then((data) => setUserId(data));
	};

	return (
		<>
			<div className={styles.container}>
				<h3
					style={{
						backgroundColor: 'rgba(0,0,0,.053)',
						color: 'black',
						padding: '6px 10px',
						borderRadius: '5px',
						textDecoration: 'none',
					}}
				>
					User details
				</h3>

				{!userId ? (
					<h2>Loading...</h2>
				) : (
					<div className={styles.details}>
						<Link to="/" className={styles.back}>
							Close
						</Link>
						<h2>
							Name: <span className={styles.span}>{userId.name}</span>{' '}
						</h2>
						<h2>
							User name: <span className={styles.span}>{userId.username}</span>{' '}
						</h2>
						<h2>
							Email: <span className={styles.span}>{userId.email}</span>
						</h2>
						<h2>
							Company: <span className={styles.span}>{userId.company.name}</span>
						</h2>
						<h2>
							Website: <span className={styles.span}>{userId.website} </span>
						</h2>
						<h2>Address: </h2>
						<ul>
							<li className={styles.addressLi}>
								<span className={styles.liSpan}>Street: </span> {userId.address.street}
							</li>
							<li className={styles.addressLi}>
								<span className={styles.liSpan}>Suite:</span> {userId.address.suite}
							</li>
							<li className={styles.addressLi}>
								<span className={styles.liSpan}>City: </span> {userId.address.city}
							</li>
							<li className={styles.addressLi}>
								<span className={styles.liSpan}>ZipCode: </span> {userId.address.zipcode}
							</li>
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

export default Details;
