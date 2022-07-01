import { Routes, Route } from 'react-router-dom';
import Detalhes from './pages/Detalhes';
import Home from './pages/Home';

const AppRouter = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detalhes/:id' element={<Detalhes />} />
        </Routes>

    );
}

export default AppRouter;