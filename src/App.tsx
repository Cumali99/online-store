import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Drawer from "./components/drawer/Drawer";
import SearchIcon from "@mui/icons-material/Search";

const arr = [
  { title: "кр1", price: 21, imageURL: "/img/car/car1.jpg" },
  { title: "коротко", price: 50, imageURL: "/img/car/car2.jpg" },
  { title: "описание", price: 70, imageURL: "/img/car/car3.jpg" },
  { title: "все просто", price: 100, imageURL: "/img/car/car4.jpg" },
];

function App() {
  return (
    <div className={styles.wrapper}>
      <Drawer />
      <Header />
      <div className={styles.content}>
        <div className={styles.upBlock}>
          <h1>Тебе понравится</h1>
          <div className={styles.searchBlock}>
            <SearchIcon />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className={styles.featured}>
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageURL={obj.imageURL}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
