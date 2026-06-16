import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function MainPage() {
  const [search, setSearch] = useState("");
  // const [msg, setMsg] = useState("");

  const searchDishe = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="container-fluid">
      <h1 className="head">Foodie's Recipe</h1>
      <div>
        <h3 style={{ textAlign: "center" }}>Hello Foodies....</h3>
        <div className="searchBar">
          <input type="text" placeholder="Enter meal.." onChange={searchDishe} />
          <NavLink to={`/${search}`}><Button>Search</Button></NavLink>
        </div>
      </div>
      <div className="suggestions">
        <NavLink to={"/cake"}><button>Cake</button></NavLink>
        <NavLink to={"/pizza"}><button>Pizza</button></NavLink>
        <NavLink to={"/burger"}><button>Burger</button></NavLink>
        <NavLink to={"/veg"}><button>Veg</button></NavLink>
      </div>
    </div>
  );
}

export default MainPage;
