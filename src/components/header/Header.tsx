import style from "./Header.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerLeft}>
        <img width={40} height={40} src="/logo512.png" alt="лого" />
        <div>
          <h3 className={style.text}>AllInBox</h3>
          <p className={style.textOpacity}>Магазин лучших товаров</p>
        </div>
      </div>
      <ul className={style.headerRight}>
        <li className={`${style.headerRight} ${style.li}`}>
          <ShoppingCartIcon className={style.iconButton} /> <span>20 USD</span>
        </li>
        <li>
          <AccountCircleIcon className={style.iconButton} />
        </li>
      </ul>
    </header>
  );
}
export default Header;
