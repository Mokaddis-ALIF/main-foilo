import { useContext } from 'react';
import './App.css';
import Home from './components/home/Home';
import { ThemeContext } from './Context';

function App() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div
			style={{
				backgroundColor: darkMode ? '#222' : 'white',
				color: darkMode && 'white',
			}}
		>
			<Home />
		</div>
	);
}

export default App;
