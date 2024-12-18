import { FC, useState } from "react";
import styles from "./Card.module.scss";
import FavoriteIconFalse from "@mui/icons-material/FavoriteBorder";
import FavoriteIconTrue from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";

interface CardProps {
  title: string;
  price: number;
  imageURL: string;
  onPlus: () => void;
}

const Card: FC<CardProps> = ({ title, price, imageURL, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const clickAddButton = () => {
    onPlus();
    setIsAdded(!isAdded);
  };

  const clickFavoriteButton = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className={styles.card}>
        <div
          className={`${styles.favorite} ${styles.favoriteB}`}
          onClick={clickFavoriteButton}
        >
          {!isFavorite ? (
            <FavoriteIconFalse />
          ) : (
            <FavoriteIconTrue style={{ color: "red" }} />
          )}
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
          <button className={styles.button} onClick={clickAddButton}>
            {!isAdded ? (
              <AddIcon className={styles.midIcon} />
            ) : (
              <CheckIcon
                className={styles.midIcon}
                style={{ color: "green" }}
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
