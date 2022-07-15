import { allRecipesData } from "../../data.js";
import { selectSearchTerm } from "../searchTermSlice/searchTermSlice";
export function loadData() {
  return {
    type: "allRecipe/loaddata",
    payload: allRecipesData
  };
}

const initialState = [];
export default function allRecipereducer(state = initialState, action) {
  switch (action.type) {
    case "allRecipe/loaddata":
      return [action.payload];
    case "favoriteRecipe/removeRecipe":
      return [...state, action.payload];
    case "favoriteRecipe/addRecipe":
      return [...state.filter((rec) => rec.id !== action.payload.id)];
    default:
      return state;
  }
}
export const selectAllRecipes = (state) => state.allRecipes;
export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
