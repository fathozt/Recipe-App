import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);

  let foods = recipe;
  const navigate = useNavigate();
  return (
    <div className="recipeCardContainer">
      {foods &&
        foods.map((i, index) => {
          return (
            <div
            className="card"
              key={index}
            >
              <img className="foodImg" src={i.recipe.image} alt="" />

              <h3>{i.recipe.label}</h3>

              <button className="btnView" onClick={() => navigate("/details", { state: { i } })}>
                View Recipe
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default RecipeCard;
