import { createStore, combineReducers } from "redux";
import { allRecipereducer } from "./Features/allRecipeSlice/allRecipeSlice.js";
import { favoriteRecipeReducer } from "./Features/favoriteRecipeSlice/favoriteRecipeSlice.js";
import { searchTermRedcer } from "./Features/searchTermSlice/searchTermSlice.js";
const rootReducer = combineReducers({
  favoriteRecipes: favoriteRecipeReducer,
  searchTerm: searchTermRedcer,
  allRecipes: allRecipereducer
});
const store = createStore(rootReducer);
store.dispatch({ type: "searchTermSlice/clearSearchTerm" });
console.log(store.getState());
export default store;
