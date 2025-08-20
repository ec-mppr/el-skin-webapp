import styles from './Navigation.module.css'
import Link from 'next/link';

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
    <div className={styles.navigationContainer}>
      <ul className={styles.navigationList}>
        {listNavigationItems.map((item) => (
          <div key={item.title} className={styles.navigationItem}>
            <Link href={item.href} className={styles.navigationLink}>{item.title}</Link>
          </div>
        ))}
      </ul>
      <p className={styles.promoText}>Kits até 50% OFF</p>
    </div>
  );
}

export default Navigation;