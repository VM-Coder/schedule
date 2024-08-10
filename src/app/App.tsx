import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Saturday from '@pages/saturday/Saturday';
import Schedule from '@pages/schedule/Schedule';
import { Provider } from 'react-redux';
import { store } from '@src/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route
						path='saturday'
						Component={Saturday}
					/>
					<Route
						path='schedule'
						Component={Schedule}
					/>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
