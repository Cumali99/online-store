import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Drawer from "./components/drawer/Drawer";
import SearchIcon from "@mui/icons-material/Search";

interface iCard {
  id: number;
  title: string;
  price: number;
  imageURL: string;
}

function App() {
  let [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState<iCard[]>([]);
  const [cartItems, setCartItems] = useState<iCard[]>([]);

  useEffect(() => {
    fetch("https://6761ad1c46efb373237296ad.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (item: iCard) => {
    const { id, title, price, imageURL } = item;
    setCartItems((prev) => [...prev, { id, title, price, imageURL }]);
  };

  return (
    <div className={styles.wrapper}>
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className={styles.content}>
        <div className={styles.upBlock}>
          <h1>Тебе понравится</h1>
          <div className={styles.searchBlock}>
            <SearchIcon />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className={styles.featured}>
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imageURL={item.imageURL}
              onPlus={() => onAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
