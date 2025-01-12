import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useMediaQuery } from "react-responsive";

function HeaderLeft() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 460px)" });
  return (
    <>
      <div className="headerLeft">
        <Logo></Logo>
        {isSmallScreen ? null : <SearchBar></SearchBar>}
      </div>
    </>
  );
}

export function Logo() {
  return (
    <>
      <div className="ms-logo">
        <div>
          <svg
            preserveAspectRatio="xMinYMin meet"
            xmlns="http://www.w3.org/2000/svg"
            width="calc(min(10%, 24px))"
            height="100%"
            fill="currentColor"
            class="bi bi-stars"
            viewBox="0 0 16 16"
          >
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="calc(min(10%, 24px))"
            height="100%"
            fill="currentColor"
            class="bi bi-star-half"
            viewBox="0 0 16 16"
          >
            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
          </svg>
        </div>
        <div>
          <span>SMART ERA</span>
        </div>
      </div>
    </>
  );
}

export function SearchBar() {
  return (
    <>
      <div className="ms-search-bar">
        <div className="search-space">
          <input
            type="text"
            className="search-input"
            placeholder="Search here......"
          />
        </div>
        <div className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default HeaderLeft;
