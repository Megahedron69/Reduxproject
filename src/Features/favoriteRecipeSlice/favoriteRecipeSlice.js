import { selectSearchTerm } from "../searchTermSlice/searchTermSlice";

export function addRecipe(recipe) {
  return {
    action: "favoriteRecipe/addRecipe",
    payload: recipe
  };
}

export function removeRecipe(recipe) {
  return {
    action: "favoriteRecipe/removeRecipe",
    payload: recipe
  };
}

const initialState = [];
export default function favoriteRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case "favoriteRecipe/addRecipe":
      return [...state, action.payload];
    case "favoriteRecipe/removeRecipe":
      return [...state.filter((favrec) => favrec.id !== action.payload.id)];
    default:
      return state;
  }
}
export const selectAllfavoriteRecipe = (state) => state.favoriteRecipes;
export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectAllfavoriteRecipe(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
