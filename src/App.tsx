import style from "./App.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { display } from "@mui/system";

function App() {
  return (
    <div className={style.wrapper}>
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
            <ShoppingCartIcon className={style.icon} /> <span>20 USD</span>
          </li>
          <li>
            <AccountCircleIcon className={style.icon} />
          </li>
        </ul>
      </header>
      <div className={style.content}>
        <h1>Тебе понравится</h1>

        <div className={style.featured}>
          <div className={style.card}>
            <img
              className={style.imgProduct}
              src="/img/car/car1.jpg"
              alt="картинка товара"
            />
            <h5>Описание продукта</h5>
            <div className={style.cardBottom}>
              <div className={style.flexColumn}>
                <span>Цена:</span>
                <b>50 USD</b>
              </div>
              <button className={style.button}>
                <AddIcon className={style.midIcon} />
              </button>
            </div>
          </div>
          <div className={style.card}>
            <img
              className={style.imgProduct}
              src="/img/car/car2.jpg"
              alt="картинка товара"
            />
            <h5>Описание продукта</h5>
            <div className={style.cardBottom}>
              <div className={style.flexColumn}>
                <span>Цена:</span>
                <b>50 USD</b>
              </div>
              <button className={style.button}>
                <AddIcon className={style.midIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
