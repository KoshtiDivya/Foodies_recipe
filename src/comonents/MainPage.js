import { useState } from "react";
import { NavLink } from "react-router-dom";

const categories = [
  { label: "Cake", path: "/cake" },
  { label: "Pizza", path: "/pizza" },
  { label: "Burger", path: "/burger" },
  { label: "Veg", path: "/veg" },
];

function MainPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="page home-page">
      <section className="hero">
        <p className="hero-eyebrow">Discover &amp; cook</p>
        <h1 className="hero-title">Find your next favorite meal</h1>
        <p className="hero-subtitle">
          Search thousands of recipes from around the world, or browse popular
          categories below.
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for pasta, chicken, dessert..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <NavLink
            to={search.trim() ? `/${search.trim()}` : "/"}
            className="btn btn-primary"
          >
            Search
          </NavLink>
        </div>

        <div className="category-pills">
          {categories.map(({ label, path }) => (
            <NavLink key={path} to={path} className="category-pill">
              {label}
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainPage;
