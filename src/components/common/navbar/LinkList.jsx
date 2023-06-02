export const Link = ({link}) => {
    return (


        <li className="nav-item">
          <a href="" className="nav-link text-small pb-0">
          <br/>
            {link.name} <br/>{link.description}
          </a>
        </li>
      )

}
export const LinkList = ({ links }) => {
  return (
    <div className="col-lg-4 mb-4">
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <Link link={link} key={index}/>
        ))}
      </ul>
    </div>
  );
};
