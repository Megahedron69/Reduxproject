import React from "react";
import "./index.css";
import SearchTerm from "./Features/searchTermSlice/searchTerm";
import FavoriteRecipes from "./Features/favoriteRecipeSlice/favoriteRecipe";
import AllRecipes from "./Features/allRecipeSlice/allRecipe";
export default function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes />
      </section>
    </main>
  );
}
