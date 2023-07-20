import { LinkList } from "./LinkList";
import "./navbar.css";
export const DropDown = ({data}) => {  
  return (
    <li className="nav-item dropdown megamenu ">
      <a
        href="#"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        className="nav-link dropdown-toggle font-weight-bold text-capitalize dropdown-toggle"
      >
        {data.name}
      </a>
      <div
        aria-labelledby="dropdownMenuButton1 "
        className="dropdown-menu border-0 p-0 m-0 "
      >
          <div className="row bg-white rounded-0 m-0 shadow-sm ">
            <div className="col-12 menu-block">
              <div className="p-4">
                <div className="row">
                  <div className="col-lg-4 mb-4">
                    <h6 className="font-weight-bold text-capitalize"  style={{ fontWeight: 'bold' }}>
                      {data.name}
                    </h6>
                    {data.description}
                  </div>
                  <div className="col-lg-4 mb-4 desplegable">
                  <LinkList links={data.links1}/>
                  </div>
                  <div className="col-lg-4 mb-4 desplegable">
                  <LinkList links={data.links2}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </li>
  );
};
