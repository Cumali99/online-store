import style from "./App.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIconFalse from "@mui/icons-material/FavoriteBorder";
import FavoriteIconTrue from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EastIcon from "@mui/icons-material/East";

function App() {
  return (
    <div className={style.wrapper}>
      <div className={style.overlay}>
        <div className={style.drawer}>
          <h2>Корзина</h2>
          <div className={style.items}>
            <div className={style.cartItem}>
              <img width={70} height={70} src="/img/car/car1.jpg" alt="" />
              <div>
                <p>Описание товара</p>
                <b>50 USD</b>
              </div>
              <div className={style.removeB}>
                <CloseIcon />
              </div>
            </div>
            <div className={style.cartItem}>
              <img width={70} height={70} src="/img/car/car2.jpg" alt="" />
              <div>
                <p>Описание товара</p>
                <b>50 USD</b>
              </div>
              <div className={style.removeB}>
                <CloseIcon />
              </div>
            </div>
          </div>
          <ul className={style.cartTotalBlock}>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>100 USD</b>
            </li>
            <li>
              <span>Налог 18%:</span>
              <div></div>
              <b>18 USD</b>
            </li>
          </ul>
          <button className={`${style.greenButton}`}>
            Оформить заказ <EastIcon className={style.eastIcon} />
          </button>
        </div>
      </div>
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
        <div className={style.upBlock}>
          <h1>Тебе понравится</h1>
          <div className={style.searchBlock}>
            <SearchIcon />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className={style.featured}>
          <div className={style.card}>
            <div className={style.favorite}>
              <FavoriteIconFalse />
            </div>
            <img
              className={style.imgProduct}
              src="/img/car/car1.jpg"
              alt="картинка товара"
            />
            <h5>Описание товара</h5>
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
