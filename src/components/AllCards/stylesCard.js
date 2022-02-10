import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	container: {
		width: '100vw',
		height: '100%',
		padding: '15px',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	card: {
		width: '300px',
		height: '100%',
		backgroundColor: 'rgba(25, 25, 25,.021)',
		backdropFilter: 'blur(6px)',
		marginTop: '20px',
		padding: '10px 20px',
		WebkitboxShadow: '-1px 6px 15px -2px rgba(0,0,0,0.29)',
		boxShadow: '-1px 6px 15px -2px rgba(0,0,0,0.29)',
		borderRadius: '5px',
		textAlign: 'center',
	},
	content: {
		marginBottom: '20px',
	},
	firstLetter: {
		width: '40px',
		height: 'fit-content',
		padding: '20px',
		borderRadius: '50%',
		backgroundColor: 'rgba(0,0,0,0.0548)',
		color: 'rgba(0,0,0,0.48)',
		margin: '0 auto',
	},
	link: {
		color: 'green',
		'&:hover': {
			color: 'black',
			fontWeight: 'semi-bold',
		},
	},
	button: {
		backgroundColor: 'red',
		outline: 'none',
		border: 'none',
		padding: '10px 30px',
		borderRadius: '4px',
		marginTop: '10px',
	},
});
