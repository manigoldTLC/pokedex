import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from "./routes";

function App() {
	return (
		<Router>
			<Header />
			<AppRouter />
		</Router>
	);
}

export default App;
