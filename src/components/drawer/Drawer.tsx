import { FC } from "react";
import styles from "./Drawer.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import EastIcon from "@mui/icons-material/East";

interface DrawerProps {
  onClose: () => void;
  items: { title: string; price: number; imageURL: string }[];
}

const Drawer: FC<DrawerProps> = ({ onClose, items }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawerTop}>
          <h2>Корзина</h2>
          <CloseIcon onClick={onClose} className={styles.closeB} />
        </div>
        <div className={styles.items}>
          {items.map((obj) => (
            <div className={styles.cartItem}>
              <img width={70} height={70} src={obj.imageURL} alt="" />
              <div>
                <p>{obj.title}</p>
                <b>{obj.price} USD</b>
              </div>
            </div>
          ))}
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
};
export default Drawer;
