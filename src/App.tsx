import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Drawer from "./components/drawer/Drawer";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  let [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState<
    { title: string; price: number; imageURL: string }[]
  >([]);

  useEffect(() => {
    fetch("https://6761ad1c46efb373237296ad.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
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
              title={item.title}
              price={item.price}
              imageURL={item.imageURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
