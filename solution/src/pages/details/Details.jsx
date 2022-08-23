import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  let data = state.i.recipe;

  console.log(state);
  console.log(data);

  return (
    <div className="detailContainer" style={{ display: "flex" }}>
      <div>
        <p>
          {data.totalNutrients.CA.label} :
          <span>
            {Math.round(data.totalNutrients.CA.quantity)}
            {data.totalNutrients.CA.unit}
          </span>
        </p>
        <p>
          {data.totalNutrients.CHOCDF.label} :
          <span>
            {Math.round(data.totalNutrients.CHOCDF.quantity)}
            {data.totalNutrients.CHOCDF.unit}
          </span>
        </p>
        <p>
          {data.totalNutrients.CHOLE.label} :{" "}
          <span>
            {Math.round(data.totalNutrients.CHOLE.quantity)}
            {data.totalNutrients.CHOLE.unit}
          </span>
        </p>
        <p>
          {data.totalNutrients.ENERC_KCAL.label} :{" "}
          <span>
            {Math.round(data.totalNutrients.ENERC_KCAL.quantity)}
            {data.totalNutrients.ENERC_KCAL.unit}
          </span>
        </p>
        <p>{data.totalWeight}</p>
        <p>Calories: {Math.round(data.calories)}</p>
        {data.digest.slice(0, 4).map((item, index) => (
          <p key={index}>
            {item.label} : <span>{Math.round(item.total)}</span>
          </p>
        ))}
      </div>
      <div>
        <h1>{data.label}</h1>
        <img src={data.image} alt={data.label} />
      </div>
      <div>
        {data.ingredients.map((i, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{i.text}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
