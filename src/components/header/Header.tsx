import styles from "./Header.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img width={40} height={40} src="/logo512.png" alt="лого" />
        <div>
          <h3 className={styles.text}>AllInBox</h3>
          <p className={styles.textOpacity}>Магазин лучших товаров</p>
        </div>
      </div>
      <ul className={styles.headerRight}>
        <li className={`${styles.headerRight} ${styles.li}`}>
          <ShoppingCartIcon className={styles.iconButton} /> <span>20 USD</span>
        </li>
        <li>
          <AccountCircleIcon className={styles.iconButton} />
        </li>
      </ul>
    </header>
  );
}
export default Header;
