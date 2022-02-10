import { Route, Routes } from 'react-router-dom';
import Details from './components/CardDetails/Details';
import HomeScreen from './components/HomeScreen';
function App() {
	return (
		<Routes>
			<Route path="" element={<HomeScreen />} />
			<Route path="/:id" element={<Details />} />
		</Routes>
	);
}

export default App;
