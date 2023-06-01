import { LinkList } from "./LinkList";

export const DropDown = ({ stylesMegamenu, stylesDropdownMenu, data}) => {
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
                  <LinkList links={data.links1}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
