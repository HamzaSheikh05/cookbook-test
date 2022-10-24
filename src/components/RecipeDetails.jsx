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
            <li>
              <strong>Recipe Id:</strong> {recipe.id}
            </li>
            <li>
              <strong>Chef Name:</strong> {recipe.name}
            </li>
            <li>
              <strong>Chef Age:</strong> {recipe.Age}
            </li>
            <li>
              <strong>Chef Speciality:</strong> {recipe.Speciality}
            </li>
            <li>
              <strong>Recipe Name:</strong> {recipe.recipe}
            </li>
            <li>
              <strong>Recipe Details:</strong> {recipe.details}
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
