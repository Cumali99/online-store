import style from "../../App.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import EastIcon from "@mui/icons-material/East";

function Drawer() {
  return (
    <div style={{ display: "none" }} className={style.overlay}>
      <div className={style.drawer}>
        <div className={style.drawerTop}>
          <h2>Корзина</h2> <CloseIcon className={style.closeB} />
        </div>
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
  );
}
export default Drawer;
