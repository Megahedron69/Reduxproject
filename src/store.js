import { createStore, combineReducers } from "redux";
import { allRecipereducer } from "./Features/allRecipeSlice/allRecipeSlice";
import { favoriteRecipeReducer } from "./Features/favoriteRecipeSlice/favoriteRecipeSlice";
const store = createStore(
  combineReducers({
    allRecipe: allRecipereducer,
    favoriteRecipe: favoriteRecipeReducer
  })
);
export default store;
