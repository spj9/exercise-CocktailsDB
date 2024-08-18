import {Link, LinkProps} from 'react-router-dom';
import '../../css/NavLink.css';

interface INavLinkProps { to: LinkProps['to']; isActive: boolean; text: string; }

export function NavLink({to, isActive, text}: INavLinkProps) {
  return ( <Link className={`link ${isActive ? 'active' : ''}`} to={to}> {text} </Link> );
}
