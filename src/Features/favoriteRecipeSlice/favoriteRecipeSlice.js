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
function favoriteRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case "favoriteRecipe/addRecipe":
      return [...state, action.payload];
    case "favoriteRecipe/removeRecipe":
      return [...state.filter((favrec) => favrec.id !== action.payload.id)];
    default:
      return state;
  }
}
export default favoriteRecipeReducer;
