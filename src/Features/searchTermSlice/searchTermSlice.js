export function setSearchTerm(term) {
  return {
    action: "searchTermSlice/setSearchTerm",
    payload: term
  };
}
export function clearSearchTerm(term) {
  return {
    action: "searchTermSlice/clearSearchTerm"
  };
}
const initialState = "";
export default function searchTermRedcer(state = initialState, action) {
  switch (action.type) {
    case "searchTermSlice/clearSearchTerm":
      return "";
    case "searchTermSlice/setSearchTerm":
      return action.payload;
    default:
      return state;
  }
}
export const selectSearchTerm = (state) => state.searchTerm;
