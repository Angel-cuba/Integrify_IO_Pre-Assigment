import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	container: {
		position: 'relative',
		width: '100%',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'column',
	},
	details: {
		backgroundColor: 'rgba(245,240,240,.4)',
		backdropFilter: 'blur(6px)',
		boxShadow: '0 0 20px rgba(2,0,0,.14)',
		borderRadius: '7px',
		padding: '20px 40px',
	},
	back: {
		position: 'absolute',
		top: 0,
		right: -56,
		backgroundColor: 'rgba(0,0,0,.053)',
		color: 'black',
		padding: '6px 10px',
		borderRadius: '5px',
		textDecoration: 'none',
		'&:hover': {
			cursor: 'pointer',
			color: 'red',
			fontWeight: 'bolder',
			boxShadow: '-2px 1px 15px 0 rgba(0,0,0,0.13)',
		},
	},
	span: {
		color: 'rgba(0,0,0,0.75)',
		fontSize: '25px',
	},
	addressLi: {
		color: 'rgba(0,0,0,0.85)',
		fontWeight: 'bold',
	},
	liSpan: {
		color: 'rgba(0,0,0,0.99)',
	},
});
