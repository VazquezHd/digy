export const LinkList = ({ links }) => {
  console.log("sdfjsdfjl", links);

  return (
    <div className="col-lg-4 mb-4">
      <ul className="list-unstyled">
        {links.map((link) => {
          return (
            <li className="nav-item">
              <a href="" className="nav-link text-small pb-0">
                {link.name} <br/>{link.description}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
