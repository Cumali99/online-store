import style from "./Card.module.scss";
import FavoriteIconFalse from "@mui/icons-material/FavoriteBorder";
import FavoriteIconTrue from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";

function Card() {
  return (
    <>
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
    </>
  );
}
export default Card;
