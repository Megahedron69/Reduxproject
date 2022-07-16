import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadData, selectFilteredAllRecipes } from "./allRecipeSlice";
import Recipe from "../../Components/Recipe";
import FavoriteButton from "../../Components/FavoriteButton";

export default function AllRecipe() {
  const favoriteIconURL =
    "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg";
  const dispatch = useDispatch();
  const selectall = useSelector(selectFilteredAllRecipes);
  const onFirstRender = () => {
    dispatch(loadData());
  };
  React.useEffect(() => {
    onFirstRender;
  }, []);
  const onAddRecipeHandler = (recipe) => {
    dispatch();
  };
  return (
    <div className="recipes-container">
      {selectall.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
}
