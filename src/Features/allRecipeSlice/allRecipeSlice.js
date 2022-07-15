import { allRecipesData } from "../../data.js";

export function loadData() {
  return {
    type: "allRecipe/loaddata",
    payload: allRecipesData
  };
}

const initialState = [];
function allRecipereducer(state = initialState, action) {
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
export default allRecipereducer;
