import React from "react";
import {
  clearSearchTerm,
  setSearchTerm,
  selectSearchTerm
} from "./searchTermSlice";
import { useSelector, useDispatch } from "react-redux";

export default function SearchTerm() {
  const searchresult = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  const searchIconUrl =
    "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg";
  const clearIconUrl =
    "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg";
  const onSearchTermChangeHandler = (event) => {
    const searchquery = event.target.value;
    dispatch(setSearchTerm(searchquery));
  };
  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={searchIconUrl} />
      <input
        id="search"
        type="text"
        value={searchresult}
        onChange={onSearchTermChangeHandler}
        placeholder="Search recipes"
      />
      {searchresult.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={clearIconUrl} alt="" />
        </button>
      )}
    </div>
  );
}
