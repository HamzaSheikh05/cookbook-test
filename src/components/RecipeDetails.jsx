import React from "react";

const RecipeDetails = ({ recipe }) => {
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {recipe && (
        <>
          <ul>
            <li>Recipe Name: {recipe.name}</li>
            <li>Recipe: {recipe.recipe}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
