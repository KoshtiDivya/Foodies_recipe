import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function MealCard() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const mealData = async () => {
      setLoading(true);
      setError("");

      if (!params.name?.trim()) {
        setData(null);
        setError("Please enter a meal name to search.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`
        );
        const result = await response.json();
        setData(result.meals);
        if (!result.meals?.length) {
          setError(`No recipes found for "${params.name}".`);
        }
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    mealData();
  }, [params.name]);

  const formattedQuery =
    params.name?.charAt(0).toUpperCase() + params.name?.slice(1);

  return (
    <div className="page results-page">
      <div className="page-header">
        <p className="page-eyebrow">Search results</p>
        <h1 className="page-title">{formattedQuery}</h1>
        {!loading && data?.length > 0 && (
          <p className="page-subtitle">{data.length} recipes found</p>
        )}
      </div>

      {loading && (
        <div className="state-message">
          <div className="spinner" aria-hidden="true" />
          <p>Loading recipes...</p>
        </div>
      )}

      {!loading && error && (
        <div className="state-message state-message--empty">
          <p>{error}</p>
          <NavLink to="/" className="btn btn-secondary">
            Back to home
          </NavLink>
        </div>
      )}

      {!loading && data?.length > 0 && (
        <div className="meal-grid">
          {data.map((item) => (
            <article key={item.idMeal} className="meal-card">
              <div className="meal-card-image">
                <img src={item.strMealThumb} alt={item.strMeal} />
              </div>
              <div className="meal-card-body">
                <h2 className="meal-card-title">{item.strMeal}</h2>
                <NavLink
                  to={`/${item.idMeal}/${item.strMeal}`}
                  className="btn btn-primary btn-sm"
                >
                  View recipe
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
