import data from "./data.json";
import { DropDown } from "./Dropdown";

export const Navbar = () => {
  console.log(data);
  const styles = {
    dropdownMenu: {
      background: "none",
      border: "none",
      width: "100%",
    },
    code: {
      color: "#745eb1",
      background: "#fff",
      padding: "0.1rem 0.2rem",
      borderRadius: "0.2rem",
    },
    textUppercase: {
      letterSpacing: "0.08em",
    },
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container-fluid">
        <a href="#" className="navbar-brand font-weight-bold d-block d-lg-none">
          Digy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            {data.map((menu_data, index) => (
              <DropDown
                stylesDropdownMenu={styles.dropdownMenu}
                data={menu_data}
                key={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
