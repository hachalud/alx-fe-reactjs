import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Loading recipe...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-red-500 font-semibold">Recipe not found!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white shadow-xl rounded-xl mt-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        {recipe.title}
      </h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 md:h-96 object-cover rounded-lg shadow-md mb-8"
      />
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Ingredients
          </h2>
          <ul className="list-none pl-5 space-y-2 text-gray-600">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-lg">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Instructions
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;