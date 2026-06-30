import MainPage from './comonents/MainPage';
import { Routes, Route } from 'react-router-dom';
import MealDetails from './comonents/MealDetails';
import MealCard from './comonents/MealCard';
import Navbar from './comonents/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:name" element={<MealCard />} />
          <Route path="/:id/:name" element={<MealDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
