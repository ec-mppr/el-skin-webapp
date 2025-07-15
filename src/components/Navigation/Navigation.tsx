import { Link } from 'react-router-dom';
import './Navigation.css';

interface NavigationItem {
    title: string
    href: string
}

const listNavigationItems: NavigationItem[] = [
  { title: 'Categorias', href: '' },
  { title: 'Tipo de pele', href: '' },
  { title: 'Necessidade', href: '' },
  { title: 'Ingredientes', href: '' }
];

function Navigation() {

  return (
    <div className='container-navegacao'>
      <ul className='lista-navegacao'>
        {listNavigationItems.map((item) => (
          <li key={item.title}>
            <Link className="link-navegacao" to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <p className="anuncio-promocao">Kits até 50% OFF</p>
    </div>
  );
}

export default Navigation;