import { createStore, combineReducers } from "redux";
import { allRecipereducer } from "./Features/allRecipeSlice/allRecipeSlice";
import { favoriteRecipeReducer } from "./Features/favoriteRecipeSlice/favoriteRecipeSlice";
import { searchTermRedcer } from "./Features/searchTermSlice/searchTermSlice";
const rootReducer = combineReducers({
  favoriteRecipes: favoriteRecipeReducer,
  searchTerm: searchTermRedcer,
  allRecipes: allRecipereducer
});
const store = createStore(rootReducer);
export default store;
