import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
      <div className='App'>
        <h1>Recipe Sharing Application</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                  {/* Recipe list */}
                  <div style={{ flex: 2 }}>
                    <RecipeList />
                  </div>

                  {/* Favorites and Recommendations */}
                  <div style={{ flex: 1 }}>
                    <FavoritesList />
                    <RecommendationsList />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
  );
}

export default App;