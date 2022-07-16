import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeRecipe,
  selectFilteredFavoriteRecipes
} from "./favoriteRecipeSlice";
import Recipe from "../../Components/Recipe";
import FavoriteButton from "../../Components/FavoriteButton";

export default function FavoriteRecipes() {
  const dispatch = useDispatch();
  const Favorites = useSelector(selectFilteredFavoriteRecipes);
  const unfavoriteIconUrl =
    "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";
  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  };
  return (
    <div className="recipes-container">
      {Favorites.map((recipe) => {
        return (
          <Recipe recipe={recipe} key={recipe.id}>
            <FavoriteButton
              onClickHandler={() => onRemoveRecipeHandler(recipe)}
              icon={unfavoriteIconUrl}
            >
              Remove Favorite
            </FavoriteButton>
          </Recipe>
        );
      })}
    </div>
  );
}
