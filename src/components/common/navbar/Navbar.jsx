import data from './data.json'


export const NewNavbar = () => {

  console.log(data)
  const styles = {
    megamenu: {
      position: "static",
    },
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
          <a
            href="#"
            className="navbar-brand font-weight-bold d-block d-lg-none"
          >
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
              {data.map((menu_data)=> <MyDropDown
                  stylesMegamenu={styles.megamenu}
                  stylesDropdownMenu={styles.dropdownMenu}
                  data={menu_data}
                />)}
            </ul>
          </div>
        </div>
      </nav>
  );
};

export const MyDropDown = ({ stylesMegamenu, stylesDropdownMenu, data}) => {
  return (
    <li className="nav-item dropdown megamenu" style={stylesMegamenu}>
      <a
        id="megamneu"
        href="#"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
      >
        {data.name}
      </a>
      <div
        aria-labelledby="dropdownMenuButton1"
        className="dropdown-menu border-0 p-0 m-0"
        style={stylesDropdownMenu}
      >
        <div className="container">
          <div className="row bg-white rounded-0 m-0 shadow-sm">
            <div className="col-12">
              <div className="p-4">
                <div className="row">
                  <div className="col-lg-4 mb-4">
                    <h6 className="font-weight-bold text-uppercase">
                    {data.name}
                    </h6>
                    <p>{data.description}</p>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <ul className="list-unstyled">
                      <li className="nav-item">
                        <a href="" className="nav-link text-small pb-0">
                          Unique Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link text-small pb-0">
                          Image Responsive
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link text-small pb-0">
                          Auto Carousel
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link text-small pb-0">
                          Newsletter Form
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <h6 className="font-weight-bold text-uppercase">
                      MegaMenu heading
                    </h6>
                    <ul className="list-unstyled">
                      <li className="nav-item">
                        <a href="" className="nav-link text-small pb-0">
                          Unique Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link text-small pb-0">
                          Image Responsive
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link text-small pb-0">
                          Auto Carousel
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link text-small pb-0">
                          Newsletter Form
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
