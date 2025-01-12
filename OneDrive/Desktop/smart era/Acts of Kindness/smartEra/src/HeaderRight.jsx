import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./App.css";

function HeaderRight() {
  const items = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Books",
    "Beauty & Personal Care",
    "Toys & Games",
    "Sports & Outdoors",
    "Automotive",
    "Grocery & Gourmet Foods",
  ];
  return (
    <>
      <div className="headerRight">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </>
  );
}

export default HeaderRight;
