import '../css/Root.css';
import {Outlet} from 'react-router-dom';
import {Nav} from '../components';

export function Root() {
  return (
    <main>
      <Outlet />
      <Nav />
    </main>
  );
}
