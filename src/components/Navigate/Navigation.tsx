import {useLocation} from 'react-router-dom';
import {NavLink} from '.';
import '../../css/Navigation.css';

export function Nav() {
  const location = useLocation();
  return (
    <nav className='nav'>
      <NavLink to={'/'} isActive={location.pathname === '/'} text='random' /> <span> &nbsp; </span>
      <NavLink to={'/search'} isActive={location.pathname === '/search'} text='search' />
    </nav>
  );
}
