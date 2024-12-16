import styles from "./Drawer.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import EastIcon from "@mui/icons-material/East";

function Drawer() {
  return (
    <div style={{ display: "none" }} className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawerTop}>
          <h2>Корзина</h2> <CloseIcon className={styles.closeB} />
        </div>
        <div className={styles.items}>
          <div className={styles.cartItem}>
            <img width={70} height={70} src="/img/car/car1.jpg" alt="" />
            <div>
              <p>Описание товара</p>
              <b>50 USD</b>
            </div>
            <div className={styles.removeB}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.cartItem}>
            <img width={70} height={70} src="/img/car/car2.jpg" alt="" />
            <div>
              <p>Описание товара</p>
              <b>50 USD</b>
            </div>
            <div className={styles.removeB}>
              <CloseIcon />
            </div>
          </div>
        </div>
        <ul className={styles.cartTotalBlock}>
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
        <button className={`${styles.greenButton}`}>
          Оформить заказ <EastIcon className={styles.eastIcon} />
        </button>
      </div>
    </div>
  );
}
export default Drawer;
