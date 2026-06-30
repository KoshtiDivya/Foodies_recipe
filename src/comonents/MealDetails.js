import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

export default function MealDetails() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const getInfo = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
        );
        const result = await response.json();
        setMeal(result.meals?.[0] || null);
      } catch {
        setMeal(null);
      } finally {
        setLoading(false);
      }
    };

    getInfo();
  }, [params.id]);

  if (loading) {
    return (
      <div className="page">
        <div className="state-message">
          <div className="spinner" aria-hidden="true" />
          <p>Loading recipe...</p>
        </div>
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="page">
        <div className="state-message state-message--empty">
          <p>Recipe not found.</p>
          <NavLink to="/" className="btn btn-secondary">
            Back to home
          </NavLink>
        </div>
      </div>
    );
  }

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const num = i + 1;
    const ingredient = meal[`strIngredient${num}`];
    const measure = meal[`strMeasure${num}`];
    if (!ingredient?.trim()) return null;
    return { ingredient, measure };
  }).filter(Boolean);

  return (
    <div className="page detail-page">
      <NavLink to="/" className="back-link">
        ← Back to home
      </NavLink>

      <article className="recipe-detail">
        <div className="recipe-detail-image">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>

        <div className="recipe-detail-content">
          <div className="recipe-badges">
            {meal.strCategory && (
              <span className="badge">{meal.strCategory}</span>
            )}
            {meal.strArea && <span className="badge badge-outline">{meal.strArea}</span>}
          </div>

          <h1 className="recipe-title">{meal.strMeal}</h1>

          {ingredients.length > 0 && (
            <section className="recipe-section">
              <h2>Ingredients</h2>
              <ul className="ingredient-list">
                {ingredients.map(({ ingredient, measure }) => (
                  <li key={ingredient}>
                    <span className="ingredient-measure">{measure?.trim()}</span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="recipe-section">
            <h2>Instructions</h2>
            <p className="recipe-instructions">{meal.strInstructions}</p>
          </section>

          <NavLink to="/" className="btn btn-secondary">
            Explore more recipes
          </NavLink>
        </div>
      </article>
    </div>
  );
}
