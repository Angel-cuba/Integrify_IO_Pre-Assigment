import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	container: {
		width: '96vw',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	card: {
		maxWidth: '260px',
		minWidth: '210px',
		height: '100%',
		backgroundColor: 'rgba(25, 25, 25,.121)',
		backdropFilter: 'blur(6px)',
		margin: '10px',
		padding: '30px 5px',
		WebkitboxShadow: '-1px 6px 15px -2px rgba(0,0,0,0.29)',
		boxShadow: '-1px 6px 15px -2px rgba(0,0,0,0.29)',
		borderRadius: '7px',
		textAlign: 'center',
		'&:hover': {
			backgroundColor: 'rgba(25, 25, 25,.145)',
			backdropFilter: 'blur(8px)',
		},
	},
	content: {
		marginBottom: '20px',
		display: 'flex',
		flexDirection: 'column',
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
		color: 'rgba(2,198,219,.7)',
		'&:hover': {
			color: 'black',
			fontWeight: 'semi-bold',
		},
	},
	button: {
		backgroundColor: 'rgba(0,160,253,.87)',
		outline: 'none',
		border: 'none',
		padding: '10px 30px',
		borderRadius: '6px',
		marginTop: '10px',
		textDecoration: 'none',
		color: 'whitesmoke',
	},
});
