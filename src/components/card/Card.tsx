import { FC, MouseEventHandler } from "react";
import styles from "./Card.module.scss";
import FavoriteIconFalse from "@mui/icons-material/FavoriteBorder";
import FavoriteIconTrue from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";

interface CardProps {
  title: string;
  price: number;
  imageURL: string;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ title, price, imageURL, onClick }) => {
  // const onClickButton = () => {
  //   alert("");
  // };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <FavoriteIconFalse />
        </div>
        <img
          className={styles.imgProduct}
          src={imageURL}
          alt="картинка товара"
        />
        <h5>{title}</h5>
        <div className={styles.cardBottom}>
          <div className={styles.flexColumn}>
            <span>Цена:</span>
            <b>{price} USD</b>
          </div>
          <button className={styles.button} onClick={onClick}>
            <AddIcon className={styles.midIcon} />
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
