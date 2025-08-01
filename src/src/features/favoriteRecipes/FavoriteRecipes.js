import React from 'react';
import FavoriteButton from "../../components/FavoriteButton.js";
import Recipe from "../../components/Recipe";
import { removeRecipe } from './favoriteRecipesSlice';
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

// Import removeRecipe from favoriteRecipesSlice.js

const FavoriteRecipes = (props) =>{
  
  // Extract dispatch and favoriteRecipes from props.
  const { dispatch , favoriteRecipes } = props;
  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
    dispatch(removeRecipe(recipe));

  };

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div id='favorite-recipes' className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    )
  }
  
};

export default FavoriteRecipes;