import { CustomIcon } from "../customIcon/CustomIcon";
import "./navbar.css";

export const Link = ({ link }) => {
  return (
    <li className="nav-item ">
      <a href={link.link? link.link: ""} className="nav-link text-small pb-0 desplegable">
        <CustomIcon name={link.icon}/> <span style={{ fontWeight: 'bold' }}>{link.name}</span><br/>
        {link.description}
        <br/> 
        <span style={{ fontWeight: 'bold' }}>{!link.link? 'Warning: There isnt a link yet': ''}</span>
        
        
      </a>
    </li>
  );
};

export const LinkList = ({ links }) => {
  return (
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <Link link={link} key={index} />
        ))}
      </ul>
  );
};
