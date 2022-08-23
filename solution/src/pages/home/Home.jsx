import RecipeCard from "../../components/recipeCard/RecipeCard";
import SearchBar from "../../components/searchBar/SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";

const APP_ID = "21093a3f";
const APP_KEY = "bd15f4ad80a0f7c0b8c1c929a60981c6	";

const Home = () => {
  const [queryData, setQueryData] = useState();
  useEffect(() => {
    getData("pizza", "breakfast");
  }, []);

  async function getData(query, meal) {
    let data = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    );
    setQueryData(data.data.hits);
  }

  console.log(queryData);
  return (
    <div>
      <div className="searchDiv">
        <SearchBar getData={getData} />
      </div>
      <RecipeCard recipe={queryData} />
    </div>
  );
};

export default Home;
