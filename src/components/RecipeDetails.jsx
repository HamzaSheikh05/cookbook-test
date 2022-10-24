import React from "react";

const RecipeDetails = ({ recipe }) => {
  if (!recipe) {
    return <div>Loading...</div>;
  }

  const styles = {
    fontSize: "20px",
    fontFamily: "san-serif",
  };

  return (
    <div>
      {recipe && (
        <>
          <ul style={styles}>
            <img
              src={recipe.image}
              alt=""
              style={{
                height: "200px",
                width: "200px",
                border: "5px solid black",
              }}
            />
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
