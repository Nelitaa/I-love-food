import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import List from './pages/List';
import { fetchCountries } from './redux/countries/countries';
import { fetchRecipes } from './redux/recipes/recipes';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCountries());
  dispatch(fetchRecipes());

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:id" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
