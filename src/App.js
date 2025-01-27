import MainPage from './comonents/MainPage';
import {Routes, Route } from 'react-router-dom';
import MealDetails from './comonents/MealDetails';
import MealCard from './comonents/MealCard';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:name' element={<MealCard/>}/>
        <Route path='/:id/:name' element={<MealDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
