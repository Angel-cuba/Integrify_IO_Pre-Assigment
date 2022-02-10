import { useParams } from 'react-router-dom';

const Details = ({ userId }) => {
	console.log(userId);
	const params = useParams();

	return (
		<>
			<h1>Aqui está la card_details {params.id}</h1>
		</>
	);
};

export default Details;
